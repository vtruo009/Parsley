import { TransactionItem } from "./utils/interfaces";
import { PropertyType, RichTextType } from "./utils/enums";
import { Client } from "@notionhq/client";
import { NOTION_SECRET, NOTION_DATABASE_ID } from "./utils/environment";
import { GetDatabaseResponse, SearchResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: NOTION_SECRET });

export async function createPage(transaction: TransactionItem): Promise<void> {
    try {
        const resp = await notion.pages.create({
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
        })
        console.log(`Created item ${transaction.description} w/ id: ${resp.id}`);
    } catch (err) {
        console.log(err);
        throw new Error(`Error creating a page for ${transaction.description}`);
    };
}

export async function searchDatabases(searchText: string): Promise<SearchResponse> {
    try {
        const response = await notion.search({
            query: searchText,
            filter: {
                value: 'database',
                property: 'object',
            },
            sort: {
                direction: 'ascending',
                timestamp: 'last_edited_time'
            },
            page_size: 5,
        });
        return response;
    } catch (err) {
        throw err;
    }
}

export async function getDatabase(id: string): Promise<GetDatabaseResponse> {
    try {
        const database = await notion.databases.retrieve({
            database_id: id,
        });

        return database;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createPage,
    searchDatabases,
    getDatabase,
}
