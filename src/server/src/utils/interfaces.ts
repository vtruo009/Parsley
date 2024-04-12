import { Category } from './enums';

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

/**
 * Properties to be specified in instances of {@link Database}
 */
export interface Database {
    id: string;
    title: string;
}
