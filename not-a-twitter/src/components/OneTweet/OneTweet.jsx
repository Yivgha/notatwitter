import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import avatar from "../../images/tweet/boy-avatar.png";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet() {
    return (
        <>
            <TweetBox>
                <LogoImg src={logo} alt="goit logo" width={76} height={22}/>
                <TopImg src={toppic} alt="top picture" width={308} height={168} />
                <MidLine>
                    <AvatarBox>
                        <TweetAvatar src={avatar} alt="boy avatar" />
                    </AvatarBox>
                </MidLine>
                <DataBox>
                    <DataText>777 tweets</DataText>
                    <DataText>100,500 Followers</DataText>
                </DataBox>
                <FollowBtn type="button">
                <BtnText>Follow</BtnText>
                </FollowBtn>
            </TweetBox>
        </>
    )
}