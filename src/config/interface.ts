/**
 * Defines the properties to be specified in instances of {@link TransactionItem}
 */
export interface TransactionItem {
    transactionDate: string;
    postedDate: string;
    description: string;
    amount: number;
    category: TransactionCategory;
    type: 'sale';
    memo: string;
}

/**
 * The category the transaction belongs to
 */
export enum TransactionCategory {
    BILLS = 'Bills & utilities',
    GROCERY = 'Grocery',
    SHOPPING = 'Shopping',
    FOOD_AND_DRINKS = 'Food & drinks',
}
