import { parse } from 'csv-parse/sync';
import fs from 'fs';

export function parseCSV(filePath: string) {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return parse(
        fileContent,
        {
            delimiter: ',',
            columns: true,
            skip_empty_lines: true,
        }
    );
}

export function deleteCSV(file: string) {
    fs.unlink(`csv-files/${file}`, (err) => {
        if (err) throw err;
        console.debug(`${file} was successfully deleted...`);
    })
}
