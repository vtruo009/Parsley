import { TransactionItem } from "../mixins";
import { PropertyType, RichTextType, Category, Color } from "../enums";
import { notion } from "..";
import { NOTION_DATABASE_ID } from "../config/environment";

const CATEGORY_COLOR_MAP: {
    [key in Category]: Color
} = {
    [Category.BILLS]: Color.BLUE,
    [Category.GROCERIES]: Color.GREEN,
    [Category.SHOPPING]: Color.PINK,
    [Category.FOOD_AND_DRINKS]: Color.BROWN,
}

export async function getPage(pageId: string) {
    return await notion.pages.retrieve({ page_id: pageId });
}

export function createPage(transaction: TransactionItem) {
    notion.pages.create({
        parent: {
            type: 'database_id',
            database_id: NOTION_DATABASE_ID || '',
        },
        properties: {
            Description: {
                [PropertyType.TITLE]: [
                    {
                        type: RichTextType.TEXT,
                        [RichTextType.TEXT]: {
                            content: transaction.description
                        },
                        annotations: {
                            bold: false,
                            italic: false,
                            strikethrough: false,
                            underline: false,
                            code: false
                        },
                    }
                ]
            },
            Amount: {
                [PropertyType.NUMBER]: transaction.amount,
            },
            Date: {
                [PropertyType.DATE]: {
                    start: transaction.transactionDate
                }
            },
            Category: {
                [PropertyType.SELECT]: {
                    name: transaction.category,
                    color: CATEGORY_COLOR_MAP[transaction.category],
                }
            },
            Memo: {
                [PropertyType.RICH_TEXT]: [
                    {
                        type: RichTextType.TEXT,
                        text: {
                            content: transaction.memo,
                        },
                        annotations: {
                            bold: false,
                            italic: false,
                            strikethrough: false,
                            underline: false,
                            code: false
                        },
                    }
                ]
            }
        }
    }).then(resp => {
        console.log(`Created item ${transaction.description} w/ id: ${resp.id}`);
    }).catch(error => {
        console.log(error);
        throw new Error(`Error creating a page for ${transaction.description}`);
    });
}
