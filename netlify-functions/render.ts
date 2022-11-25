import {renderToHTML} from '../dist/server/index.mjs';
import {ServerContext} from '@ice/runtime';

const handler = async (event /*context*/) =>
{
    const {value} = await renderToHTML({
        req: event
    } as ServerContext);

    return {
        statusCode: 200,
        headers: {'Content-Type': 'text/html'},
        body: value
    };
};

export {handler};