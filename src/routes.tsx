import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import BaseLayout from './components/layout/BaseLayout';
import SuspenseLoader from './components/atoms/SuspenseLoader';

// Lazy load components
const Loader = (Component: any) => (props: any) =>
(
    <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
    </Suspense>
);



// Status

const Status404 = Loader(
    lazy(() => import('./components/pages/status/Status404'))
);
const Status500 = Loader(
    lazy(() => import('./components/pages/status/Status500'))
);
const StatusComingSoon = Loader(
    lazy(() => import('./components/pages/status/ComingSoon'))
);
const StatusMaintenance = Loader(
    lazy(() => import('./components/pages/status/Maintenance'))
);

// Pages

// ----------------- AUTHENTICATION -----------------
const LoginPage = Loader(lazy(() => import('./components/pages/authentication/Login')));
// ----------------- DASHBOARD -----------------
// const Patients = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Patients'))
// );
// const Staff = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Staff'))
// );
// const Clinicians = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Clinicians'))
// );
// const Templates = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Notifications/Templates'))
// );
// const Communication = Loader(
//     lazy(
//         () => import('src/components/Pages/Dashboard/Notifications/Communication')
//     )
// );
// const EmailTemplates = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Notifications/Emails'))
// );
// const HRDashboard = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/HR'))
// );
// const CheckInSurveys = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/CheckInSurveys'))
// );
// const Analytics = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Analytics'))
// );
// const Billing = Loader(
//     lazy(() => import('src/components/Pages/Dashboard/Billing'))
// );

const routes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <LoginPage />
            },
            {
                path: 'status',
                children: [
                    {
                        path: '',
                        element: <Navigate to="404" replace />
                    },
                    {
                        path: '404',
                        element: <Status404 />
                    },
                    {
                        path: '500',
                        element: <Status500 />
                    },
                    {
                        path: 'maintenance',
                        element: <StatusMaintenance />
                    },
                    {
                        path: 'coming-soon',
                        element: <StatusComingSoon />
                    }
                ]
            },
            {
                path: '*',
                element: <Status404 />
            }
        ]
    },
    // {
    //     path: 'dashboards',
    //     element: <SidebarLayout />,
    //     children: [
    //         {
    //             path: 'patients',
    //             element: <Patients />
    //         },
    //         {
    //             path: 'staff',
    //             element: <Staff />
    //         },
    //         {
    //             path: 'clinicians',
    //             element: <Clinicians />
    //         },
    //         {
    //             path: 'templates',
    //             element: <Templates />
    //         },
    //         {
    //             path: 'communication',
    //             element: <Communication />
    //         },
    //         {
    //             path: 'emails',
    //             element: <EmailTemplates />
    //         },
    //         {
    //             path: 'hr-dashboard',
    //             element: <HRDashboard />
    //         },
    //         {
    //             path: 'check-in-surveys',
    //             element: <CheckInSurveys />
    //         },
    //         {
    //             path: 'analytics',
    //             element: <Analytics />
    //         },
    //         {
    //             path: 'billing',
    //             element: <Billing />
    //         }
    //     ]
    // }
];

export default routes;
