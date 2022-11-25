import {Grid, Space} from '@arco-design/web-react';
import {ReactNode} from 'react';

export interface FooterProps
{
    span?: number;
    justify?: string;
    children?: ReactNode;
}

export default ({justify = 'center', span = 18, children}: FooterProps) =>
{

    return <Grid.Row justify={justify}
                     align={'stat'}
                     className={'footer'}>
        <Grid.Col span={4}>
            <img alt={'Ice'}
                 src={'https://v3.ice.work/assets/images/splash-68f23214ef7cddd2d9afc925903a326c.png'}
                 style={{width: '128px'}}/>
        </Grid.Col>

        <Grid.Col span={4}>
            <Space direction={'vertical'}>
                <h3>Ice.js SSR Demo</h3>
                <div>
                    Demonstration on how to use SSR functionality within Ice.js
                </div>
            </Space>
        </Grid.Col>

        <Grid.Col span={4}>
            <Space direction={'vertical'}>
                <b>Links</b>

                <a href={'https://github.com/skitsanos/icejs-ssr'}
                   target={'_blank'}>Code on GitHub</a>

                <a href={'https://www.linkedin.com/in/skitsanos/'}
                   target={'_blank'}>Author's LinkedIn</a>

                <a href={'https://ice.work/'}
                   target={'_blank'}>Alibaba Ice</a>

                <a href={'https://arco.design/'}
                   target={'_blank'}>Arco.Design</a>
            </Space>
        </Grid.Col>
    </Grid.Row>;
}