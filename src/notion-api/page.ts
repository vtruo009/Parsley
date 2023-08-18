import { Client } from "@notionhq/client";
import { NOTION_SECRET } from "../config/environment";

const notion = new Client({ auth: NOTION_SECRET });

export async function getPage(pageId: string) {
    const endpoint: string = `https://api.notion.com/v1/pages/${pageId}`;

    return await notion.pages.retrieve({page_id: pageId});
}

function createPage() {
    
}
