import {Outlet} from 'ice';

export default ({children}) =>
{

    return <>
        header
        <Outlet/>
    </>;
}