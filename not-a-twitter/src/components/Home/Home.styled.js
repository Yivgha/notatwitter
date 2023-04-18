import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const HomeLink = styled(Link)`
  cursor: pointer;
  color: green;
`;

export const BoxText = styled.h2`
  font-size: 20px;
  margin: 15px 0;
`;

export const HomeImg = styled(Image)`
  align-self: center;
  width: 300px;
  height: 300px;
`;
