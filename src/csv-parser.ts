import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import { transactionItem } from './config/interface';

export function createTransactionData() {
    const parsedData = parseCSV('/workspaces/Notion-Financial-Tracker/bank-statements/chase_2023-06-01.csv');
    return cleanUpData(parsedData);
}

function cleanUpData(parsedData: any): transactionItem[] {
    const transactions: transactionItem[] = [];
    for (let record of parsedData) {
        transactions.push({
            transactionDate: new Date(record['Transaction Date']).toISOString(),
            postDate: new Date(record['Post Date']).toISOString(),
            description: record.Description,
            category: record.Category,
            amount: record.Amount,
            memo: record.Memo,
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
