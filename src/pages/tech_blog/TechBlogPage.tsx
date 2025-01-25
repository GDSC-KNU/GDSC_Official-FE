// import { TeamBlogMetaData } from '@gdg/router/components/MetaData';
import styled from '@emotion/styled';

import Text from '@gdg/components/common/typography/Text';
import Grid from '@gdg/components/common/layouts/grid';
import PageTitle from '@gdg/components/common/title/PageTitle';
import { getPostList } from '@gdg/apis/hooks/techblog/useGetPostList';
import useInfinity from '@gdg/hooks/useInfinity';
import { Spinner } from '@gdg/components/common/Spinner';

import PostCard from './Components/PostCard';

const PostListLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 45px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TechBlogPage = () => {
  const {
    observerRef,
    data: latest,
    isPending,
    hasNext,
  } = useInfinity('', getPostList);
  // const popular = ['', '', '', '', ''];

  return (
    <>
      {/* <TeamBlogMetaData /> */}
      <PageTitle MainTitle='테크 블로그' SubTitle='Tech Blog' />
      <PostListLayout>
        <Text size='xl' weight='bold'>
          인기글 TOP 5
        </Text>
        <Grid columns={2} gap={36} padding={0}>
          {/* {popular.map((e, i) => {
            return <PostCard key={i}  />;
          })} */}
        </Grid>
      </PostListLayout>

      <PostListLayout>
        <Text size='xl' weight='bold'>
          최신글
        </Text>
        <Grid columns={2} gap={36} padding={0}>
          {latest.map((e, i) => {
            return <PostCard key={i} title={e.title} />;
          })}
        </Grid>
        {isPending && <Spinner />}
        {hasNext && <div ref={observerRef}></div>}
      </PostListLayout>
    </>
  );
};

export default TechBlogPage;
