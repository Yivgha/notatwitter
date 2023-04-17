import styled from '@emotion/styled';
import Image from 'next/image';

export const TweetBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImg = styled(Image)`
  margin-top: 20px;
  margin-left: 20px;
`;

export const TopImg = styled(Image)`
  margin: -18px 36px 18px 36px;
`;

export const MidLine = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarBox = styled.div`
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 86px;
  transform: translate(185%, -50%);
`;

export const TweetAvatar = styled(Image)`
  width: 62px;
  height: 62px;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  border-radius: 86px;
`;

export const DataBox = styled.div`
  margin-top: 66px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const DataText = styled.p`
  color: #ebd8ff;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2em;
  text-transform: uppercase;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  margin-bottom: 36px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  outline: none;
  align-self: center;
  cursor: pointer;

  &:hover {
    background: #5cd3a8;
  }
`;

export const BtnText = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22em;
  text-transform: uppercase;
  color: #373737;
`;
