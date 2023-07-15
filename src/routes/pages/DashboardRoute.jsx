import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../components/page-components/dashboard/Dashboard';
import { useLocation } from 'react-router-dom';

export default function DashboardRoute() {

    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.session);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const pipedriveOuthCode = queryParams.get('code');
    // If the user is not logged in the redirect to the register page. Keep the oauth code in the url if it exists
    useEffect(() => {
        console.log('code: ', pipedriveOuthCode);
        if (!isLoggedIn) {
            navigate(`/login${pipedriveOuthCode ? `?code=${pipedriveOuthCode}` : ''}`);
        } 
    }, [isLoggedIn, pipedriveOuthCode])

    useEffect(() => {
        const pipedriveOauthSetup = async () => {
            if (isLoggedIn && pipedriveOuthCode) {
                console.log('pipedriveOuthCode: ', pipedriveOuthCode);
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pipedrive/oauth/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code: pipedriveOuthCode }),
                })
                const data = await response.json();
                console.log('data: ', data);
            }
        }
        pipedriveOauthSetup();
    }, [pipedriveOuthCode])

    if (!isLoggedIn) {
        return <></>;
    }

    return <Dashboard />;
}
