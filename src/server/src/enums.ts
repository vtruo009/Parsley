/**
 * Supported categories of a transaction
 */
export enum Category {
    BILLS = 'Bills & Utilities',
    GROCERIES = 'Groceries',
    SHOPPING = 'Shopping',
    FOOD_AND_DRINKS = 'Food & Drinks',
}

/**
 * Supported types of RichText
 */
export enum RichTextType {
    TEXT = 'text',
    MENTION = 'mention',
    EQUATION = 'equation',
}

/**
 * Supported property types
 */
export enum PropertyType {
    TITLE = 'title',
    DATE = 'date',
    SELECT = 'select',
    RICH_TEXT = 'rich_text',
    NUMBER = 'number',
}
