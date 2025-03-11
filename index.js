import {readFileSync} from 'node:fs'

const content = readFileSync("puppy.torrent");
console.log(content.toString('utf-8'));

