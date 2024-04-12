import { parse } from 'csv-parse/sync';
import fs from 'fs';
import { TransactionItem } from './interfaces';
import { Category } from './enums';

function parseCSV(filePath: string) {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return parse(
        fileContent,
        {
            delimiter: ',',
            columns: true,
            skip_empty_lines: true,
        }
    );
}

export function deleteCSV(file: string) {
    fs.unlink(file, (err) => {
        if (err) throw err;
        console.debug(`${file} was successfully deleted...`);
    })
}

export function createTransactions(tempFilePath: string) {
    const parsedData = parseCSV(`${tempFilePath}`);
    return createTransaction(parsedData);
}

function createTransaction(parsedData: any): TransactionItem[] {
    const transactions: TransactionItem[] = [];
    for (let record of parsedData) {
        if (record.Type !== 'Payment') {
            transactions.push({
                transactionDate: new Date(record['Transaction Date']).toISOString(),
                postDate: new Date(record['Post Date']).toISOString(),
                description: record.Description as string,
                category: record.Category as Category,
                amount: Math.abs(record.Amount as number),
                memo: record.Memo as string,
            });
        }
    }
    return transactions;
}

module.exports = {
    deleteCSV,
    createTransactions,
}
