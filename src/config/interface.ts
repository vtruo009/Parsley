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
 * The category the transaction belongs to
 */
export interface transactionItem {
    transactionDate: string;
    postedDate: string;
    description: string;
    amount: number;
    category: Category;
    memo: string;
}
