import Text from '@gdg/components/common/typography/Text';
import gdgknu from '@gdg/assets/gdgknu.png';
import likes from '@gdg/assets/icon/likes.svg';
import comment from '@gdg/assets/icon/comment.svg';

import {
  CardWrapper,
  Image,
  MetaDataLayout,
  TrackCard,
  Icon,
} from './PostCard.style';

const PostCard = ({ title }: { title: string }) => {
  return (
    <CardWrapper>
      <Image src={gdgknu} alt='thumbnail' />
      <MetaDataLayout $gap={8} $dir='column'>
        <Text size='xl' weight='bold'>
          {title}
        </Text>
        <MetaDataLayout $gap={6} $dir='column'>
          <Text size='md'>본문 미리보기 또는 부제목</Text>
          <MetaDataLayout $gap={12} $dir='row'>
            <TrackCard>프론트엔드</TrackCard>
            <Text>2024.08.24</Text>
            <Text>|</Text>
            <MetaDataLayout $gap={5} $dir='row'>
              <Icon src={likes} alt='likes' />
              <Text>123</Text>
            </MetaDataLayout>
            <MetaDataLayout $gap={5} $dir='row'>
              <Icon src={comment} alt='likes' />
              <Text>456</Text>
            </MetaDataLayout>
          </MetaDataLayout>
        </MetaDataLayout>
      </MetaDataLayout>
    </CardWrapper>
  );
};

export default PostCard;
