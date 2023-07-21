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
 * Available color that can be used with multiselect, text, and select
 */
export enum Color {
    BLUE = 'blue',
    BROWN = 'brown',
    DEFAULT = 'default',
    GRAYP = 'gray',
    GREEN = 'green',
    ORANGE = 'orange',
    PINK = 'pink',
    PURPLE = 'purple',
    RED = 'red',
    YELLOW = 'yellow',
}

/**
 * Available background color that can be used with texts and blocks
 */
export enum BackgroundColor {
    BLUE = 'blue_background',
    BROWN = 'brown_background',
    GRAY = 'gray_background',
    GREEN = 'green_background',
    ORANGE = 'orange_background',
    PINK = 'pink_background"',
    PURPLE = 'purple_background',
    RED = 'red_background',
    YELLOW = 'yellow_background',
}

type TextColor = Color | BackgroundColor;

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
