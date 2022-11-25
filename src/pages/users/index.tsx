import {defineServerDataLoader, useData} from 'ice';

export const serverDataLoader = defineServerDataLoader(async () =>
{
    return Promise.resolve({
        server: true,
        debug: 'yes'
        //data
    });
});

export default () =>
{
    const data = useData();

    return <div>Users page

        <pre>
                {JSON.stringify(data || {}, null, 2)}
                </pre>
    </div>;
}