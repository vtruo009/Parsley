/**
 * All possible transaction categories
 */
export enum Category {
    BILLS = 'Bills & Utilities',
    GROCERIES = 'Groceries',
}

/**
 * Defines the properties to be specified in instances of {@link transactionItem}.
 */
export interface transactionItem {
    'Transaction Date': Date;
    'Post Date': Date;
    Description: string;
    Category: Category;
    Type?: string;
    Amount: number;
    Memo?: string;
}