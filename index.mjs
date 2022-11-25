/**
 * Basic HTTP Server to test Ice.js SSR
 * @author skitsanos
 * @version 1.0.0
 */

import {createReadStream} from 'fs';
import http from 'http';
import {extname, join} from 'path';

import {renderToHTML} from './dist/server/index.mjs';

const root = join('.', 'dist');
const getContentType = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/jpeg'
};

http.createServer(async (req, res) =>
{

    const ext = extname(req.url);

    const header = {
        'Content-Type': getContentType[ext] || 'text/html'
    };

    res.writeHead(200, header);

    if (ext)
    {
        // static file url
        const path = join(root, req.url);
        const stream = createReadStream(path);
        stream.on('error', (error) =>
        {
            console.log(error);

            res.writeHead(404, 'Not Found');
            res.end();
        });
        stream.pipe(res);
    }
    else
    {
        console.log(req.url);
        // url render
        const {value} = await renderToHTML({
            req
        });
        res.write(value);
        res.end();
    }

}).listen(3000);