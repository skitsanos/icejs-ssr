import {defineDataLoader, useData} from 'ice';

export const dataLoader = defineDataLoader(async () =>
{
    const apiResponse = await fetch('https://api.skitsanos.com/api/utils/headers');

    return Promise.resolve({
        server: true,
        debug: 'yes',
        data: await apiResponse.json()
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