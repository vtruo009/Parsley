import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import { transactionItem } from './config/interface';

export function createTransactionData() {
    const parsedData = parseCSV('/Users/vantruong/Desktop/notion-financial-tracker/bank-statements/chase_2023-06-01.CSV');
    return cleanUpData(parsedData);
}

function cleanUpData(parsedData: any): transactionItem[] {
    const transactions: transactionItem[] = [];
    for (let record of parsedData) {
        transactions.push({
            'Transaction Date': new Date(record['Transaction Date']),
            'Post Date': new Date(record['Post Date']),
            Description: record.Description,
            Category: record.Category,
            Type: record.Type,
            Amount: record.Amount,
            Memo: record.Memo,
        });
    }
    return transactions;
}

function parseCSV(filePath: string) {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});
    return parse(
        fileContent,
        {
            delimiter: ',',
            columns: true,
            skip_empty_lines: true,
        }
    );
}
