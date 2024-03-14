import dotenv from 'dotenv';
import { notion } from "..";

dotenv.config()

export async function getDatabase() {
    return await notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID || '' });
}
