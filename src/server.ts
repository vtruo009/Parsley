import express from 'express';
import * as notion from './notion-api/page';
import { PORT } from './config/environment';

const app = express();

app.get('/', (req, res) => {
    res.send("bye");
})

app.listen(PORT);
