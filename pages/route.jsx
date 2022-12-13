import {useRouter} from 'next/router';
import FullPageLoader from '../public/Pageloader';
import { useEffect } from 'react';

const Route = () => {
    const router = useRouter();
    const {pathname} = router;
    
    useEffect(() => {

        if (pathname=='/') {
            router.push('/login');
        }
    }, []);

    return <FullPageLoader />;

}
export default Route;