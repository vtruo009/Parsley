// Using import causes ES5 error for private properties
import dotenv from 'dotenv';
import { createTransactions } from './csv-parser';
import { createPage } from './notion-api/page';
import { Client } from "@notionhq/client";

dotenv.config();

export const notion = new Client({ auth: process.env.NOTION_SECRET });

function main() {
    const transactions = createTransactions();
    for (let transaction of transactions) {
        createPage(transaction);
    }
    // getDatabase().then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })
    // getPage('e4c40637eb724649a28b9881b15199ca')
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
}

main();
