import * as math from './math.js';
import './app.css';
import nyancat from './nyancat.jpg';

console.log(math.sum(1, 2));

document.addEventListener('DOMContentLoaded', () => [
    document.body.innerHTML = `
        <img src="${nyancat}" />
    `
])

console.log(process.env.NODE_ENV);
console.log(VERSION);
console.log(api.domain);
