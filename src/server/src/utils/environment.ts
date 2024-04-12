import dotenv from 'dotenv';
dotenv.config();

export const NOTION_SECRET = process.env.NOTION_SECRET || '';
export const PORT = process.env.PORT || '3000';
