// Using import causes ES5 error for private properties
const { Client } = require('@notionhq/client');
import {
    NOTION_SECRET,
    NOTION_DATABASE_ID
} from './config/environment';

async function main() {
    const notion = new Client({
        auth: NOTION_SECRET,
    });
    
    // const exDatabase = await notion.databases.query({
    //     database_id: NOTION_DATABASE_ID,
    // });
    const exPage = await notion.pages.create({
        parent: {
            type: 'database_id',
            database_id: NOTION_DATABASE_ID,
        },
        properties: {
            'Item': {
                type: 'title',
                title: [{
                    type: 'text',
                    text: {
                        content: 'Ground Beef'
                    }
                }],
            },
            'Category': {
                type: 'multi_select',
                multi_select: [
                    {
                        name: 'Protein',
                        color: 'blue',
                    }
                ]
            },
            'Price': {
                type: 'number',
                number: 9.99
            }
        }
    });

    return exPage;
}

main()
    .then(resp => {
        console.log(resp);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
