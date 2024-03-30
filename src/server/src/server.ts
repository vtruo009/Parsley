import express from 'express';
import fileupload from 'express-fileupload';
import { PORT } from './utils/environment';
import { createTransactions } from './transactions';
import { createPage } from './notion';
import { deleteCSV } from './utils/csv-file';

const app = express();
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp',
}));

app.get('/', async (req, res) => {
    res.send('Welcome to Notion Finance Tracker!');
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
        transactions.forEach(transaction => {
            createPage(transaction);
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