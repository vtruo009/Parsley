import { Client } from "@notionhq/client";
import { NOTION_DATABASE_ID, NOTION_SECRET } from "../config/environment";
import { TransactionItem } from "../mixins";
import { PropertyType, RichTextType, Category, Color } from "../enums";

const notion = new Client({ auth: NOTION_SECRET });

export async function getPage(pageId: string) {
    return await notion.pages.retrieve({ page_id: pageId });
}

export async function createPage(transaction: TransactionItem) {
    return await notion.pages.create({
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
                    name: Category.GROCERIES,
                    color: Color.GREEN,
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
    });
}
