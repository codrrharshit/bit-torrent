import {readFileSync} from 'node:fs'
import bencode from 'bencode'
import { Buffer } from 'node:buffer'
import dgram from 'dgram'
import url from 'url'



 
const content = readFileSync("puppy.torrent");
const torrent = bencode.decode(content,'utf-8');
const URL = url.parse(torrent.announce.toString('utf-8'));
console.log(URL);

const socket= dgram.createSocket('udp4');
const myMsg=Buffer.from('hello?','utf-8')

socket.send(myMsg,0,myMsg.length,URL.port,URL.host,()=>{});
socket.on('message',(msg)=>{
    console.log("Message is  ",msg);
})


