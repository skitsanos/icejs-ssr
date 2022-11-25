//https://www.jianshu.com/p/205057e6c16b

import {createReadStream} from 'fs';
import http from 'http';
import {extname, join} from 'path';

import {renderToHTML} from './build/server/index.mjs';

const root = join('.', 'build');
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

    if (!ext)
    {
        console.log(req.url);
        // url render
        const context = {};
        const {value} = await renderToHTML({
            req,
            context
        });
        res.write(value);
        res.end();
    }
    else
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

}).listen(3000);