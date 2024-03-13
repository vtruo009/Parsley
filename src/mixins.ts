import { Url } from "url";
import { Color, BackgroundColor, Category, PropertyType, RichTextType } from "./enums";

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

/**********************************************************
 * RICH TEXT INTERFACES
 **********************************************************/

/**
 * Properties to be specified in instances of {@link Text}
 */
interface Text {
    content: string;
    link?: {
        url: Url,
    } | null,
}

/**
 * Properties to be specified in instances of {@link Equation}
 */
export interface Equation {
    expression: string;
}

/**
 * Properties to be specified in instances of {@link Annotation}
 */
export interface Annotation {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color?: TextColor;
}


/**
 * Mapped type to use RichTextType enum as key
 */
type MappedRichTextObject = {
    [key in RichTextType]?: Text | Annotation;
}

/**
 * Properties to be specified in instances of {@link RichText}
 */
interface RichText extends MappedRichTextObject {
    type: RichTextType;
    annotations: Annotation,
    plain_text: string,
    href?: Url,
}

interface Title extends MappedRichTextObject {
    type: 'title';
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

type PropertyTypeObject = Select | number | Date | Title | RichText | undefined;

/**
 * Mapped types to use PropertyType enum as key
 */
type MappedProperty = {
    [key in PropertyType]?: PropertyTypeObject | [PropertyTypeObject];
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
        [key: string]: MappedProperty,
    };
    id?: string;
}
