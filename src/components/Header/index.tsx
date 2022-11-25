import {Grid} from '@arco-design/web-react';
import Logo from '@/components/Logo';
import {ReactNode} from 'react';

export interface HeaderProps
{
    span?: number;
    justify?: string;
    children?: ReactNode;
}

export default ({justify = 'center', span = 18, children}: HeaderProps) =>
{
    return <Grid.Row justify={justify}
                     className={'header'}>
        <Grid.Col span={span}>
            <Grid.Row align={'center'}>
                <Grid.Col flex={'200px'}>
                    <Logo title={'Ice [SSR]'}/>
                </Grid.Col>

                <Grid.Col flex={'auto'}
                          xs={0}
                          style={{
                              marginLeft: '1em',
                              display: 'flex',
                              justifyContent: 'flex-end'
                          }}>
                    {children}
                </Grid.Col>
            </Grid.Row>
        </Grid.Col>
    </Grid.Row>;
};