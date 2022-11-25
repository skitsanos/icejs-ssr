import {Outlet} from 'ice';
import {Button, Layout} from '@arco-design/web-react';
import Header from '@/components/Header';

export default () =>
{

    return <Layout>
        <Layout.Header>
            <Header>
                <Button type={'text'}>Home</Button>
                <Button type={'text'}>About</Button>
                <Button type={'text'}>Downloads</Button>
            </Header>
        </Layout.Header>

        <Layout.Content className={'content'}>
            <Outlet/>
        </Layout.Content>

        <Layout.Footer>
            Footer
        </Layout.Footer>

    </Layout>;
}