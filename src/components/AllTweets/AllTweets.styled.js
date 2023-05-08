import styled from '@emotion/styled';
import Link from 'next/link';

export const TweetPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 150px;
  height: 30px;
  background-color: inherit;
  border: transparent;
  cursor: pointer;
  border-radius: 20px;
  border: 3px solid #5cd3a8;
  &:hover {
    background: #5cd3a8;
  }
`;

export const BtnLink = styled(Link)`
text-decoration: none;
color: blue;
font-size: 30px;
font-style: italic;
`

export const AllItems = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  display: flex;
  flex-wrap: wrap;
`;
export const ItemList = styled.div`
  @media (max-width: 767px) {
    margin: 10px 0;
  }
  @media (min-width: 768px) {
    margin: 10px 20px;
  }
`;
export const LoadMore = styled.button`
  width: 120px;
  height: 50px;
  margin: 20px 0 20px 40px;
  background: #ebd8ff;
  border-radius: 30px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #5cd3a8;
  }
`;
