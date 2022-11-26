import serverless from 'serverless-http';
import {createServer} from 'http';
import {extname, join} from 'path';
import {createReadStream} from 'fs';
import {renderToHTML} from 'dist/server/index.mjs';

const server = createServer(async (req, res) =>
{
    const ext = extname(req.url);

    if (ext)
    {
        // static file url
        const path = join('dist', req.url);
        const stream = createReadStream(path);
        stream.on('error', (error) =>
        {
            res.writeHead(404, 'Not Found');
            res.end();
        });

        stream.pipe(res);
    }
    else
    {
        const {value} = await renderToHTML({
            req
        });

        res.write(value);
        res.end();
    }
});

const handler = serverless(server);

export {handler};