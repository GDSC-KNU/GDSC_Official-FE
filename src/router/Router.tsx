import { lazy } from 'react';
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  Outlet,
} from 'react-router-dom';

import { AsyncBoundary } from '@gdg/components/common/AsyncBoundary';
import { LoadingView } from '@gdg/components/common/View/LoadingView';
// import { BlogPostProvider } from '@gdg/pages/tech_blog/context/index';
import { TeamUpdateProvider } from '@gdg/provider/TeamUpdate';
import RouteChangeTracker from '@gdg/router/components/RouteChangeTracker';
import StatusRoute from '@gdg/router/components/StatusRoute';

const TechBlogPage = lazy(() => import('@gdg/pages/tech_blog/TechBlogPage'));
// const TechBlogEditPage = lazy(
//   () => import('@gdg/pages/tech_blog/TechBlogEditPage')
// );
// const TechBlogPostPage = lazy(
//   () => import('@gdg/pages/tech_blog/TechBlogPostPage')
// );
const TechBlogRootPage = lazy(
  () => import('@gdg/pages/tech_blog/TechBlogRootPage')
);
const ErrorPage = lazy(() => import('@gdg/pages/ErrorPage'));
const CommunityPage = lazy(() => import('@gdg/pages/community/CommunityPage'));
const TeamPage = lazy(() => import('@gdg/pages/team'));
const RootPage = lazy(() => import('@gdg/pages/RootPage'));
const MainPage = lazy(() => import('@gdg/pages/main/MainPage'));
const SigninPage = lazy(() => import('@gdg/pages/signin/SigninPage'));
const SignupPage = lazy(() => import('@gdg/pages/signup/SignupPage'));
const ApplyPage = lazy(() => import('@gdg/pages/apply/ApplyPage'));
const ApplyFormPage = lazy(() => import('@gdg/pages/apply/ApplyFormPage'));
const ApplyExPage = lazy(() => import('@gdg/pages/apply/ApplyExPage'));
const InquiryPage = lazy(() => import('@gdg/pages/apply/InquiryPage'));
const IntroducePage = lazy(() => import('@gdg/pages/introduce/IntroducePage'));
// const MyPage = lazy(() => import('@gdg/pages/mypage/MyPage'));
const AuthCallBackPage = lazy(
  () => import('@gdg/pages/signin/AuthCallBackPage')
);
const AdminRootPage = lazy(() => import('@gdg/pages/AdminRootPage'));
const AdminDocConfirmPage = lazy(
  () => import('@gdg/pages/admin/AdminDocConfirmPage')
);
const AdminSetStatePage = lazy(
  () => import('@gdg/pages/admin/AdminSetStatePage')
);
const AdminTeamArrangePage = lazy(
  () => import('@gdg/pages/admin/AdminTeamArrangePage')
);

type AppRouteObject = (IndexRouteObject | NonIndexRouteObject) & {
  children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'signin',
        element: <SigninPage />,
      },
      {
        path: 'apply',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <ApplyPage />,
          },
          {
            path: ':tech',
            element: <Outlet />,
            children: [
              {
                path: '',
                element: <ApplyExPage />,
              },
              {
                path: 'form',
                element: (
                  <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />
                ),
                children: [
                  {
                    path: '',
                    element: <ApplyFormPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'inquiry',
            element: (
              <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />
            ),
            children: [{ path: '', element: <InquiryPage /> }],
          },
        ],
      },
      // {
      //   path: 'mypage',
      //   element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
      //   children: [
      //     {
      //       path: '',
      //       element: <MyPage />,
      //     },
      //   ],
      // },
      {
        path: 'team',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <TeamPage />,
          },
        ],
      },
      {
        path: 'introduce',
        element: <IntroducePage />,
      },
      {
        path: 'community',
        element: <StatusRoute allowedStatuses={['CORE', 'MEMBER', 'GUEST']} />,
        children: [
          {
            path: '',
            element: <CommunityPage />,
          },
        ],
      },
      {
        path: '/techblog',
        element: <TechBlogRootPage />,
        id: 'techBlogRoot',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            element: <TechBlogPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminRootPage />,
    id: 'adminRoot',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <StatusRoute allowedStatuses={['CORE']} />,
        children: [
          {
            path: '',
            element: <AdminSetStatePage />,
          },
        ],
      },
      {
        path: 'team',
        element: <StatusRoute allowedStatuses={['CORE']} />,
        children: [
          {
            path: '',
            element: (
              <TeamUpdateProvider>
                <AdminTeamArrangePage />
              </TeamUpdateProvider>
            ),
          },
        ],
      },
      {
        path: 'document',
        element: <StatusRoute allowedStatuses={['CORE']} />,
        children: [
          {
            path: '',
            element: <AdminDocConfirmPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/oauth/:provider/redirect',
    element: <AuthCallBackPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />,
  },
  // {
  //   path: 'write',
  //   element: (
  //     <BlogPostProvider>
  //       <StatusRoute allowedStatuses={['CORE', 'MEMBER']} />
  //     </BlogPostProvider>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <TechBlogEditPage />,
  //     },
  //     {
  //       path: 'post',
  //       element: <TechBlogPostPage />,
  //     },
  //   ],
  // },
];

const createRoutesWithAsyncBoundary = (
  routes: AppRouteObject[]
): AppRouteObject[] => {
  return routes.map((route) => {
    const { element, children, ...rest } = route;

    if ('index' in route) {
      return {
        ...rest,
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <RouteChangeTracker />
            {element}
          </AsyncBoundary>
        ),
      } as AppRouteObject;
    } else {
      return {
        ...rest,
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
            <RouteChangeTracker />
            {element}
          </AsyncBoundary>
        ),
        children: children
          ? createRoutesWithAsyncBoundary(children)
          : undefined,
      } as AppRouteObject;
    }
  });
};

export const Router = createBrowserRouter(
  createRoutesWithAsyncBoundary(routesConfig)
);
