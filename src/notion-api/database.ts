import dotenv from 'dotenv';
import { TransactionItem } from "../mixins";
import { PropertyType, RichTextType, Category, Color } from "../enums";
import { notion } from "..";

dotenv.config()

export async function getDatabase() {
    return await notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID || '' });
}

export async function queryDatabase() {

}