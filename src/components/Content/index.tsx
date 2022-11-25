import {Grid} from '@arco-design/web-react';
import {ReactNode} from 'react';

export interface ContentProps
{
    span?: number;
    justify?: string;
    children?: ReactNode;
}

export default ({justify = 'center', span = 18, children}: ContentProps) =>
{

    return <Grid.Row justify={justify}
                     align={'stat'}
                     className={'content'}>
        <Grid.Col span={span}>
            {children}
        </Grid.Col>
    </Grid.Row>;
}