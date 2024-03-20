import dotenv from 'dotenv';
dotenv.config();

export const NOTION_SECRET = process.env.NOTION_SECRET || '';
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || '';
export const PORT = process.env.PORT || '3000';