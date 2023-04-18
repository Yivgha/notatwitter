import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet({ id, tweets, avatar, followers, active}) {

    const handleClick = () => {
        
        const allUsers = JSON.parse(localStorage.getItem("users"));

        for (const i of allUsers) {
            if (i.id === id) {

                if (i.active === false) {
                    i.followers = followers + 1;
                    i.active = true;
                    console.log(i);
                    localStorage.setItem("users", JSON.stringify(allUsers));
                }

                else if (i.active === true) {
                    i.followers = followers - 1;
                    i.active = false;
                    console.log(i);
                    localStorage.setItem("users", JSON.stringify(allUsers));
                };
            }
        };
    };


    return (
        <>
            <TweetBox key={id}>
                <LogoImg src={logo} alt="goit logo" width={76} height={22} priority={true}/>
                <TopImg src={toppic} alt="top picture" width={308} height={168} priority={true} />
                <MidLine>
                    <AvatarBox>
                        <TweetAvatar src={avatar} alt="user avatar" width={62} height={62}/>
                    </AvatarBox>
                </MidLine>
                <DataBox>
                    <DataText>
                    {tweets} tweets
                    </DataText>
                    <DataText id="dataText">
                        
                        {followers.toLocaleString('en-US')} followers
                    </DataText>
                </DataBox>
                <FollowBtn type="button" onClick={handleClick} id="followBtn"
                    style={{ backgroundColor: active ? "#5cd3a8" : "#ebd8ff" }}
                >
                    <BtnText id="btnText"> 
                        {active ? "Following" : "Follow"}
                    </BtnText>
                    
                </FollowBtn>
            </TweetBox>
        </>
    )
}