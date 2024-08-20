import CompleteBtn from '@gdsc/components/common/button/CompleteBtn';
import { LazyLoadImg } from '@gdsc/components/common/img/LazyLoadingImg';
import Text from '@gdsc/components/common/typography/Text';

import { useColTz } from '@gdsc/hooks/useColTz';

import Earth from '@gdsc/assets/Earth.gif';
import LeftArrow from '@gdsc/assets/LeftArrow.svg';
import RightArrow from '@gdsc/assets/RightArrow.svg';

import { useCarouselStore } from '@gdsc/store/useCarouselStore';

import { cardData } from '../MainIntroduceText';
import { RotateCarouselProps } from '../PCRotateCarousel';
import {
  ArrowImg,
  Button,
  Card,
  CardMainText,
  Carousel,
  CompleteBtnWrapper,
  ContentText,
  Scene,
} from '../RotateCarousel.style';
import styled from '@emotion/styled';

const TabletRotateCarousel = ({
  handleNextClick,
  handlePrevClick,
  rotateAngle,
}: RotateCarouselProps) => {
  const { angle, opacityArray } = useCarouselStore();
  const colTz = useColTz();

  return (
    <NotPCContainer>
      <Scene>
        <EarthImageTabletWrapper>
          <LazyLoadImg
            image={{
              src: Earth,
              alt: 'earth',
              width: '100%',
              height: 'auto',
            }}
          />
        </EarthImageTabletWrapper>
        <Carousel style={{ transform: `rotateY(${-angle}deg)` }}>
          {[...Array(6)].map((_, index) => (
            <Card
              key={index}
              style={{
                transform: `rotateY(${rotateAngle * index}deg) translateZ(${colTz}px)`,
                opacity: opacityArray[index],
              }}
            >
              <CardMainText
                weight='700'
                color='black'
                whiteSpace='normal'
                size='sm'
              >
                {cardData[index].mainText}
              </CardMainText>
              <Text weight='500' color='black' whiteSpace='normal' size='xs'>
                {cardData[index].subText}
              </Text>
              <hr
                style={{
                  width: '80%',
                  height: '1px',
                  backgroundColor: 'black',
                  margin: '0 auto',
                }}
              />
              <MobileContentText
                color='black'
                size='xs'
                weight='500'
                whiteSpace='normal'
              >
                {cardData[index].contentText}
              </MobileContentText>
              <CompleteBtnWrapper>
                <CompleteBtn
                  size='xs'
                  type='button'
                  color='blue'
                  backgroundColor='blue'
                  hoverColor='blue'
                >
                  팀블로그 바로가기
                </CompleteBtn>
              </CompleteBtnWrapper>
            </Card>
          ))}
        </Carousel>
      </Scene>
      <ButtonLayout>
        <Button onClick={handlePrevClick}>
          <ArrowImg src={LeftArrow} alt='arrow' />
        </Button>
        <Button onClick={handleNextClick}>
          <ArrowImg src={RightArrow} alt='arrow' />
        </Button>
      </ButtonLayout>
    </NotPCContainer>
  );
};

export default TabletRotateCarousel;

const NotPCContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 170%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const EarthImageTabletWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -40%);
`;

const MobileContentText = styled(ContentText)`
  padding: 10px;
  width: calc(100% - 20px);
`;