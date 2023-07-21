/**
 * Defines the properties to be specified in instances of {@link TransactionItem}
 */
export enum Category {
    BILLS = 'Bills & Utilities',
    GROCERIES = 'Groceries',
    SHOPPING = 'Shopping',
    FOOD_AND_DRINKS = 'Food & Drinks',
}

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
