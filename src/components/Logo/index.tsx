import {ReactNode} from 'react';
import {Space} from '@arco-design/web-react';

export interface LogoProps
{
    icon?: ReactNode;
    title?: ReactNode;
}

export default ({title, icon}: LogoProps) =>
{
    return <Space>
        {!icon && <svg className={'header-icon'}
                       width="24"
                       height="24"
                       viewBox="0 0 48 48"
                       fill="currentColor">
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37 16c0-7.18-5.82-13-13-13S11 8.82 11 16c0 1.315.195 2.584.558 3.779C6.566 21.594 3 26.38 3 32c0 7.18 5.82 13 13 13 3.017 0 5.795-1.028 8-2.752A12.944 12.944 0 0032 45c7.18 0 13-5.82 13-13 0-5.62-3.566-10.406-8.558-12.22A13 13 0 0037 16zm-2.342 7.445l.027-.038A9 9 0 1126.75 39.31 12.94 12.94 0 0029 32c0-1.315-.195-2.584-.558-3.779a13.037 13.037 0 006.216-4.776zm-21.343-.039l-.233.076A9.008 9.008 0 007 32a9 9 0 008.735 8.996L16 41l.265-.004a9 9 0 008.22-12.006 12.985 12.985 0 01-11.17-5.584zM15 16a9 9 0 1118 0 9 9 0 01-18 0z"
                  fill="currentColor"/>
        </svg>}
        <span className={'header-title'}>{title}</span>
    </Space>;
}