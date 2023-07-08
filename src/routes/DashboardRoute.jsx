import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

export default function DashboardRoute() {

    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.session);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <></>;
    }

    return <Dashboard />;
}
