import styled from '@emotion/styled';

import { displayCenter } from '@gdg/styles/LayoutStyle';

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  min-width: 220px;

  height: auto;
  max-height: 340px;
  min-height: 235px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 240px;
  min-height: 135px;

  border-radius: 20px;
  background-color: var(--color-white);

  object-fit: contain;
`;

export const TrackCard = styled.div`
  width: 80px;
  height: 20px;

  background-color: var(--color-more-transparent);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--font-size-xs);
`;

export const Icon = styled.img`
  width: 12px;
  height: 20px;

  ${displayCenter}
  object-fit: contain;
`;

export const MetaDataLayout = styled.div<{ $gap: number; $dir: string }>`
  display: flex;
  flex-direction: ${(props) => props.$dir};

  white-space: nowrap;
  gap: ${(props) => props.$gap}px;
`;
