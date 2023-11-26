// Using import causes ES5 error for private properties
import { createTransactionData } from './csv-parser';
import { createPage } from './notion-api/page';

async function main() {
    const transactions = createTransactionData();
    return await createPage(transactions[0]);
}

main()
    .then(resp => {
        console.log(resp.id);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
