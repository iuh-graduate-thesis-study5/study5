import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout';

// render - login
const UserManager = Loadable(lazy(() => import('pages/user')));
const AccountManager = Loadable(lazy(() => import('pages/account')));
const QuestionManager = Loadable(lazy(() => import('pages/question-manage')));
const ExamManager = Loadable(lazy(() => import('pages/exam-manage')));
const DoExam = Loadable(lazy(() => import('pages/exam-manage/child-view/do-exam')));
const FinalExam = Loadable(lazy(() => import('pages/exam-manage/child-view/final-exam')));
const ResultExam = Loadable(lazy(() => import('pages/exam-manage/child-view/result-exam')));

const DetailAccount = Loadable(lazy(() => import('pages/detail-account')));

// ==============================|| AUTH ROUTING ||============================== //

const ManageRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'account',
            element: <AccountManager />
        },
        {
            path: 'user',
            element: <UserManager />
        },
        {
            path: 'type-of-exam',
            element: <UserManager />
        },
        {
            path: 'exam',
            element: <ExamManager />
        },
        {
            path: 'exam/view-question/:id',
            element: <DoExam />
        },
        {
            path: 'exam/view-final/:id',
            element: <FinalExam />
        },
        {
            path: 'exam/result-exam',
            element: <ResultExam />
        },
        {
            path: 'parts',
            element: <UserManager />
        },
        {
            path: 'question',
            element: <QuestionManager />
        },
        {
            path: 'user-detail',
            element: <DetailAccount />
        }
    ]
};

export default ManageRoutes;
