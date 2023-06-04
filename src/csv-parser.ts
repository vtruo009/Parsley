// import { parse } from 'csv-parse/sync';
// import * as csv from 'csv-parse'
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import { transactionItem } from './config/interface';

export function parseCSV(filePath: string) {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});
    const transactions: transactionItem[] = parse(fileContent, {delimiter: ','});
    return transactions;
}
