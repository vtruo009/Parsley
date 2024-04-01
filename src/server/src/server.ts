import express from 'express';
import fileupload from 'express-fileupload';
import { PORT } from './utils/environment';
import { createTransactions } from './utils/helpers';
import { createPage, getDatabase, searchDatabases } from './notion';
import { deleteCSV } from './utils/helpers';
import { DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const app = express();
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp',
}));

app.get('/', async (req, res) => {
    res.send('Welcome to Notion Finance Tracker!');
})

app.get('/search', async (req, res) => {
    const databases = await searchDatabases(req.body);

    const databaseOptions = await Promise.all(databases.results.map(async (item) => {
        const database = await getDatabase(item.id) as DatabaseObjectResponse;
        return {
            id: item.id,
            title: database.title.length > 0 ? database.title[0].plain_text : 'Untitled',
        };
    }));

    console.debug('Finished getting all shared databases...', databaseOptions);

    res.set({
        'Access-Control-Allow-Origin': ['http://localhost:5173'],
    });
    res.send(databaseOptions);
})

app.post('/create-transactions', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.csvFile as fileupload.UploadedFile;
    file.mv(file.tempFilePath, (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send(`Something went wrong with copying file: ${err}`);
        }
        console.debug('Successfully uploaded file: ', file);

        const transactions = createTransactions(file.tempFilePath);
        transactions.forEach(async (transaction) => {
            await createPage(transaction);
        });

        try {
            deleteCSV(file.tempFilePath);
        } catch (err) {
            console.log(`Error deleting file ${file.name}: ${err}`);
        }

        res.send(`Successfully created transactions!`);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
