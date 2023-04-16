import styled from '@emotion/styled';

export const Button = styled.button`
  width: 50px;
  height: 30px;
  color: black;
  background-color: inherit;
  border: transparent;
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
