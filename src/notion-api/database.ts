import { TransactionItem } from "../mixins";
import { PropertyType, RichTextType, Category, Color } from "../enums";
import { notion } from "..";

const NOTION_DATABASE_ID = "f908fa68ca534875b582cc8172da02fc";

export async function getDatabase() {
    return await notion.databases.retrieve({ database_id: NOTION_DATABASE_ID });
}

export async function queryDatabase() {

}