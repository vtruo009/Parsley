const { Client } = require('@notionhq/client'); // import doesn't work
import {
    NOTION_SECRET,
    NOTION_DATABASE_ID
} from './config/integration';

async function main() {
    const notion = new Client({
        auth: NOTION_SECRET,
    });
    
    // const response = await notion.databases.query({
    //     database_id: NOTION_DATABASE_ID,
    // });
    const response = await notion.pages.create({
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

    return response;
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
