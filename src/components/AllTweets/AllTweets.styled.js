import styled from '@emotion/styled';

export const TweetPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  width: 50px;
  height: 30px;
  color: black;
  background-color: inherit;
  border: transparent;
  cursor: pointer;
`;

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
