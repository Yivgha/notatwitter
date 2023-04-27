import { useEffect, useState } from "react";
import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet({ id, tweets, avatar }) {
    
     
    
    
    // const savedFollowers = JSON.parse(localStorage.getItem("followers"));
    // const savedActive = JSON.parse(localStorage.getItem("active"));

    const [followers, setFollowers] = useState("100500");
    const [active, setActive] = useState(false);

    const handleClick = () => {
        const savedValue = JSON.parse(localStorage.getItem("users"));
        savedValue.filter(item => {
            if (item.id === id) {
                if (active === false) {
                    setFollowers("100501");
                    setActive(true);
                    item.active = true;
                    item.followers = "100501";
                    localStorage.setItem("followers", JSON.stringify(followers));
                    localStorage.setItem("active", JSON.stringify(active));
                    localStorage.setItem("users", JSON.stringify(savedValue));
                };
                if (active === true) {
                    setActive(false);
                    setFollowers("100500");
                    item.active = false;
                    item.followers = "100500";
                    localStorage.setItem("followers", JSON.stringify(followers));
                    localStorage.setItem("active", JSON.stringify(active));
                    localStorage.setItem("users", JSON.stringify(savedValue));
                };
                
                
            };
            
        });
    };

   useEffect(() => {
       JSON.parse(localStorage.getItem("followers"));
       JSON.parse(localStorage.getItem("active"));
      }, []);

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
                    <DataText>
                        {followers?.toLocaleString('en-US')} followers
                    </DataText>
                </DataBox>
                <FollowBtn type="button" onClick={handleClick}
                    style={{ backgroundColor: active ? "#5cd3a8" : "#ebd8ff" }}
                >
                    <BtnText> 
                        {active ? "Following" : "Follow"}
                        
                    </BtnText>
                    
                </FollowBtn>
            </TweetBox>
        </>
    )
}