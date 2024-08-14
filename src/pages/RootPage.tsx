import { Oval } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigationMobile from '@gdsc/components/feature/header/MainNavigationMobile';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import MainNavigation from '../components/feature/header/MainNavigation';
import styled from '@emotion/styled';

export const MainContent = styled.main`
  padding-top: 45px;
  width: 100%;
  height: calc(auto - 45px);
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 500px) {
    padding-top: 75px;
  }
`;

const RootPage = () => {
  const navigation = useNavigation();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      {isMobile ? <MainNavigationMobile /> : <MainNavigation />}
      <MainContent>
        {navigation.state === 'loading' && (
          <Oval
            visible={true}
            height='30'
            width='30'
            color='#fff'
            ariaLabel='oval-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        )}
        <Outlet />
      </MainContent>
    </>
  );
};

export default RootPage;
