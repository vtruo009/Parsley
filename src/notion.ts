import { TransactionItem } from "./transactions";
import { PropertyType, RichTextType } from "./enums";
import { Client } from "@notionhq/client";
import { NOTION_SECRET, NOTION_DATABASE_ID } from "./utils/environment";

export const notion = new Client({ auth: NOTION_SECRET });

export function createPage(transaction: TransactionItem) {
    notion.pages.create({
        parent: {
            type: 'database_id',
            database_id: NOTION_DATABASE_ID,
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

module.exports = {
    createPage,
}
