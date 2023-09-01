import { Client } from "@notionhq/client";
import { NOTION_DATABASE_ID, NOTION_SECRET } from "../config/environment";
import { Category, Color, Page, ParentType, PropertyType, RichTextType, TransactionItem } from "../interface";

const notion = new Client({ auth: NOTION_SECRET });

export async function getPage(pageId: string) {
    return await notion.pages.retrieve({ page_id: pageId });
}

export async function createPage(transaction: TransactionItem) {
    const requestBody = generateRequestBody(transaction);
    return await notion.pages.create(requestBody);
}

function generateRequestBody(item: TransactionItem) {
    const body: Page = {
        parent: {
            type: 'database_id',
            database_id: NOTION_DATABASE_ID || '',
        },
        properties: {
            Description: {
                type: PropertyType.TITLE,
                title: [{

                }]
            },
            Amount: {
                type: PropertyType.NUMBER,
                number: item.amount,
            },
            Date: {
                type: PropertyType.DATE,
                date: {
                    start: item.transactionDate
                }
            },
            Category: {
                type: PropertyType.SELECT,
                select: {
                    name: Category.GROCERIES,
                    color: Color.GREEN,
                }
            },
            Memo: {
                type: PropertyType.RICH_TEXT,
                rich_text: [{
                    type: RichTextType.TEXT,
                    text: {
                        content: item.memo,
                        link: null
                    }
                }]
            }
        }
    }
    return body;
}