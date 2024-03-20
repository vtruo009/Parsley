import express from 'express';
import { createTransactions } from './csv-parser';
import * as notion from './notion-api/page';
import { PORT } from './config/environment';
import path from 'path';

const app = express();
const filePath = path.join(__dirname, '/index.html');

app.get('/', async (req, res) => {
    // const page = await notion.getPage('e4c40637eb724649a28b9881b15199ca')
    // res.send(page)
    res.sendFile(`${filePath}`)
});

app.post('/create-transactions', async (req, res) => {
    console.log(req.params)
    const transactions = createTransactions();
    res.send(`Successfully created transactions: ${transactions}`)
})

app.listen(PORT);
