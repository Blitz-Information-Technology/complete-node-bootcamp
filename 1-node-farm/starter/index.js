import fs, { read } from 'fs';
import http from 'http';

const readFile = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(readFile);
// 😎 This is so cool now that I can add emoji into my work.
// 🤝 so this works really well I can type with styled emoji in my code.
// 🤔 will I ever not put a note into my code, prolly not!
// 🔥 So down here we are not using asychronouse code.

const textOut = `this is what we know about the avacado: ${readFile}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('Your file was written fooo!!!');

// 😎 HERE WE ARE CREATING OUR FIRST SERVER
const server = http.createServer((req, res) => {
  res.end('Mane the server is up and running!🏃‍♂️');
});

server.listen(8000, () => {
  console.log('Say foo the server is up and running 🏃‍♂️');
});
