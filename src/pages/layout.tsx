import {definePageConfig, history, Outlet} from 'ice';
import {Button, Layout} from '@arco-design/web-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Content from '@/components/Content';

export const pageConfig = definePageConfig(() => ({
    title: 'Demo ;)'
}));

export default () =>
{
    return <Layout>
        <Layout.Header>
            <Header>
                <Button type={'text'}
                        onClick={() =>
                        {
                            history?.push('/');
                        }
                        }>Home</Button>
                <Button type={'text'}>About</Button>
                <Button type={'text'}
                        onClick={() =>
                        {
                            history?.push('/users');
                        }
                        }>Users</Button>
            </Header>
        </Layout.Header>

        <Layout.Content className={'content'}>
            <Content>
                <Outlet/>
            </Content>
        </Layout.Content>

        <Layout.Footer>
            <Footer/>
        </Layout.Footer>

    </Layout>;
}