import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';

// render - dashboard
const Home = Loadable(lazy(() => import('pages/homepage/home')));
const Testpage = Loadable(lazy(() => import('pages/test-page/introduce-test')));
const DoExam = Loadable(lazy(() => import('pages/test-page/do-exam')));
const MySchedule = Loadable(lazy(() => import('pages/schedule')));
const ExamLibrary = Loadable(lazy(() => import('pages/exam-library')));
const ResultExam = Loadable(lazy(() => import('pages/test-page/result-exam')));
const MyResult = Loadable(lazy(() => import('pages/homepage/my-result')));
const MYProfile = Loadable(lazy(() => import('pages/detail-account')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const HomeRoutes = {
    path: '/home/',
    element: <HomeLayout />,
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: 'room/:id',
            element: <Testpage />
        },
        {
            path: 'do-exam/:id',
            element: <DoExam />
        },
        {
            path: 'my-schedule',
            element: <MySchedule />
        },
        {
            path: 'exams-library',
            element: <ExamLibrary />
        },
        {
            path: 'my-result',
            element: <MyResult />
        },
        {
            path: 'result-exam/:id',
            element: <ResultExam />
        },
        {
            path: 'user-detail',
            element: <MYProfile />
        }
    ]
};

export default HomeRoutes;
