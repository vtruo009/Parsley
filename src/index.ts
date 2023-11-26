// Using import causes ES5 error for private properties
import { createTransactionData } from './csv-parser';
import { createPage } from './notion-api/page';

function main() {
    const transactions = createTransactionData();
    for (let transaction of transactions) {
        createPage(transaction);
    }
}

main();
