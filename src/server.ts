import express from 'express';
import fileupload from 'express-fileupload';
import { PORT } from './config/environment';
import { createTransactions } from './csv-parser';
import { createPage } from './notion';

const app = express();
app.use(fileupload())

app.post('/create-transactions', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.csvFile as fileupload.UploadedFile;
    file.mv(`./csv-files/${file.name}`, (err) => {
        if (err) {
            return res.status(500).send(`Something went wrong with copying file: ${err}`);
        }
        console.debug(`Successfully uploaded file ${file.name}`);

        const transactions = createTransactions(file.name);
        transactions.forEach(transaction => {
            createPage(transaction);
        });

        res.send(`Successfully created transactions!`);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
