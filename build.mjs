import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import * as path from "node:path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const files = [
    './src/const.js',
];

const dirs = [
    './src/utils',
    './src/functions',
]

for(const dir of dirs){
    readdirSync(path.join(__dirname, dir))
        .forEach((file) => {
            files.push(dir + path.sep + file);
        });
}

const outDir = './dist';
const outName = 'main.js';

const parts = [];

let content;
for(const file of files){
    content = readFileSync(path.join(__dirname, file), 'utf8');

    // remove all import export stuff
    content = content.replaceAll('export ', '');
    content = content.replaceAll(/import {(.|\n)*} from ".*";?\n*/gim, '');

    parts.push(content);
}

if (!existsSync(outDir)) {
    mkdirSync(outDir);
}

writeFileSync(path.join(__dirname, outDir + path.sep + outName), parts.join('\n'));

console.log('combined:')
console.log(files)
console.log('saved into: ' + outDir + path.sep + outName)
