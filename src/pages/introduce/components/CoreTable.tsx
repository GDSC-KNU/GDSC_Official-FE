import styled from '@emotion/styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import Bosung from '@gdg/assets/gdscknu4/Core-Bosung.jpg';
import Chaewon from '@gdg/assets/gdscknu4/Core-Chaewon.png';
import Daegun from '@gdg/assets/gdscknu4/Core-Daegun.jpg';
import Dongpil from '@gdg/assets/gdscknu4/Core-Dongpil.jpg';
import Kangmin from '@gdg/assets/gdscknu4/Core-Gangmin.jpeg';
import Hyunmin from '@gdg/assets/gdscknu4/Core-Hyeonmin.jpeg';
import Jaeyong from '@gdg/assets/gdscknu4/Core-Jaeyong.jpg';
import Jeongmin from '@gdg/assets/gdscknu4/Core-Jeongmin.png';
import Suhyeon from '@gdg/assets/gdscknu4/Core-Suhyeon.jpg';
import Yeongin from '@gdg/assets/gdscknu4/Core-Yeongin.jpeg';
import Kyuhoi from '@gdg/assets/gdscknu4/Lead-Kyuhoi.png';
import { IntroText, IntroTextStyle } from '@gdg/styles/IntroduceStyle';

gsap.registerPlugin(ScrollTrigger);

type CoreBoxProps = {
  backgroundImage: string;
};

const CoreTableBox = styled.div`
  display: grid;
  margin-bottom: 92px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
  column-gap: 45px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 23px;
    row-gap: 40px;
  }

  &.animateTable {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const CoreBox = styled.div<CoreBoxProps>`
  width: 140px;
  height: 132px;
  padding: 24px 20px;
  border-radius: var(--size-xs);
  background-color: var(--color-app);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.backgroundImage});
  background-size: contain;

  @media (max-width: 750px) {
    width: 120px;
    height: 112px;
  }

  @media (max-width: 620px) {
    width: 105px;
    height: 97px;
  }
`;

const TableStatusText = styled.div`
  ${IntroTextStyle}
  color: var(--color-selective);
`;

const TableTextLayout = styled.div`
  margin-top: 22px;
`;

const CoreTable = () => {
  useEffect(() => {
    gsap.to('.animateTable', {
      scrollTrigger: {
        trigger: '.animateTable',
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <CoreTableBox className='animateTable'>
      <CoreBox backgroundImage={Kyuhoi}>
        <TableStatusText>Organizer</TableStatusText>
        <TableTextLayout>
          <IntroText>김규회</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Kangmin}>
        <TableStatusText>TeamMember-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>김강민</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Dongpil}>
        <TableStatusText>TeamMember-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>조동필</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Daegun}>
        <TableStatusText>TeamMember-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>김대건</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Chaewon}>
        <TableStatusText>TeamMember-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>신채원</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Suhyeon}>
        <TableStatusText>TeamMember-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>권수현</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Yeongin}>
        <TableStatusText>TeamMember-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>김영인</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Jaeyong}>
        <TableStatusText>TeamMember-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>윤재용</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Jeongmin}>
        <TableStatusText>TeamMember-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>채정민</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Bosung}>
        <TableStatusText>TeamMember-AI</TableStatusText>
        <TableTextLayout>
          <IntroText>백보성</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Hyunmin}>
        <TableStatusText>TeamMember-DESIGNER</TableStatusText>
        <TableTextLayout>
          <IntroText>김현민</IntroText>
        </TableTextLayout>
      </CoreBox>
    </CoreTableBox>
  );
};

export default CoreTable;
