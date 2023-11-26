import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import { TransactionItem } from './mixins';
import { Category } from './enums';

export function createTransactionData() {
    const parsedData = parseCSV('bank-statements/chase-2023-11-26.CSV');
    return cleanUpData(parsedData);
}

function cleanUpData(parsedData: any): TransactionItem[] {
    const transactions: TransactionItem[] = [];
    for (let record of parsedData) {
        transactions.push({
            transactionDate: new Date(record['Transaction Date']).toISOString(),
            postDate: new Date(record['Post Date']).toISOString(),
            description: record.Description as string,
            category: record.Category as Category,
            amount: Math.abs(record.Amount as number),
            memo: record.Memo as string,
        });
    }
    return transactions;
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
