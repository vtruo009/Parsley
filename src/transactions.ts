import { Category } from './enums';
import { parseCSV } from './utils/csv-file';

/**
 * Properties to be specified in instances of {@link TransactionItem}
 */
export interface TransactionItem {
    transactionDate: string;
    postDate: string;
    description: string;
    amount: number;
    category: Category;
    memo: string;
}

export function createTransactions(filename: string) {
    const parsedData = parseCSV(`./csv-files/${filename}`);
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
    createTransactions,
}
