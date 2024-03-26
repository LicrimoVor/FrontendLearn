import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { getUserInited, userActions } from '@/entities/User';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from './providers/router';

/** Главная приложуха */
function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    { inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
