import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './root';
import configureStore from './store';

function renderHTML(html, preloadedState) {
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
                <script>window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();

        const context = {};

        const root = (
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        const htmlString = renderToString(root);
        const preloadedState = store.getState();

        if (context.url) {
            res.writeHead(302, {
                location: context.url,
            });
            res.end();
            return;
        }

        res.send(renderHTML(htmlString, preloadedState));
    }
}