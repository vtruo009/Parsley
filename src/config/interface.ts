/**
 * All possible transaction categories
 */
export enum Category {
    BILLS = 'Bills & Utilities',
    GROCERIES = 'GROCERIES',
}

/**
 * Defines the properties to be specified in instances of {@link transactionItem}.
 */
export interface transactionItem {
    TransactionDate: Date;
    PostDate: Date;
    Description: string;
    Category: Category;
    Type?: string;
    Amount: number;
    Memo?: string;
}