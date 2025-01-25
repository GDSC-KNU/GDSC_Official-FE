import { Outlet } from 'react-router-dom';

import InnerCircle from '@gdg/components/feature/background/InnerCircle';
import CrossShape from '@gdg/components/feature/star/Cross';
import Star from '@gdg/components/feature/star/Star';

import { MainContent } from '../RootPage';

const TechBlogRootPage = () => {
  return (
    <>
      <MainContent>
        <InnerCircle />

        {[...Array(5)].map((_, index) => (
          <CrossShape
            key={index}
            top={`${Math.random() * (50 - 10) + 10}%`}
            left={`${Math.random() * (85 - 15) + 15}%`}
          />
        ))}

        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 20}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}

        <Outlet />
      </MainContent>
    </>
  );
};

export default TechBlogRootPage;
