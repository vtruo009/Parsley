import { Url } from "url";

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

/**
 * Properties to be specified in instances of {@link Annotation}
 */
interface Annotation {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: TextColor;
}

export enum RichTextType {
    TEXT = 'text',
    MENTION = 'mention',
    EQUATION = 'equation',
}

/**
 * Properties to be specified in instances of {@link Text}
 */
interface Text {
    content: string;
    link: {
        url: Url,
    } | null,
}

/**
 * Properties to be specified in instances of {@link RichTextObject}
 */
interface RichTextObject {
    type: RichTextType;
    text?: Text,
    // mention?: ,
    // equation?: {
    //     expression: string;
    // },
    annotations: Annotation,
    plain_text: string,
    href?: Url,
}

/**
 * Properties to be specified in instances of {@link RichText}
 */
interface RichText {
    rich_text: RichTextObject;
}

/**
 * Properties to be specified in instances of {@link Select}
 */
interface Select {
    name: string;
    color: Color;
    id?: string;
}

/**
 * Properties to be specified in instances of {@link Date}
 * @property {string} start The start date
 * @property {string} end Optional end date
 */
interface Date {
    start: string;
    end?: string;
}

type PropertiesType = Select | number | Date | RichText | Text;

export enum PropertyType {
    TITLE = 'title',
    DATE = 'date',
    SELECT = 'select',
    RICH_TEXT = 'rich_text',
    NUMBER = 'number',
}

type MappedProperty = {
    [key in PropertyType]?: PropertiesType
}

interface Properties extends MappedProperty {
    type: PropertyType,
}

/**
 * Properties to be specified in instances of {@link Page}
 * 
 * @property {string} parent The parent page or database of this page
 * @property {Object} properties An object containing all the properties of page
 */
export interface Page {
    parent: {
        type: 'database_id',
        database_id: string,
    } | {
        type: 'page_id',
        page_id: string,
    };
    properties: {
        [key: string]: Properties
    };
    id?: string;

}
