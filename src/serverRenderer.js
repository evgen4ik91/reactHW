import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './root';  

function renderHTML(html) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>reactHW</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,400i,700" rel="stylesheet">
                <link rel="stylesheet" type="text/css" href="/style.css">
            </head>
            <body>
                <div id="app">${html}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const htmlString = renderToString(<Root/>);
        res.send(renderHTML(htmlString));
    }
}