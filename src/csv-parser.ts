import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import { TransactionItem } from './mixins';
import { Category } from './enums';

export function createTransactions() {
    const parsedData = parseCSV('bank-statements/chase-2023-11-24.CSV');
    return createTransaction(parsedData);
}

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
    createTransactions,
}
