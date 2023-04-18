import { useState } from "react";
import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet({ id, tweets, avatar, followers, active}) {

    // const [color, setColor] = useState(false);
    // const [myFollowers, setMyFollowers] = useState('')

    const green = "#5cd3a8";
    const puple = "#ebd8ff";
    const [buttonColor, setButtonColor] = useState(puple);
    const [btnText, setBtnText] = useState("Follow")
    
    function handleColorChange() {
    const newColor = buttonColor === puple ? green : puple;
    setButtonColor(newColor);
    };

    function handleTextChange() {
        const newBtnText =  btnText === "Follow" ? "Following" : "Follow";
        setBtnText( newBtnText)
    };

    const handleClick = () => {
        
        const allUsers = JSON.parse(localStorage.getItem("users"));
    
        for (const i of allUsers) {
            if (i.id === id) {

                if (i.active === false) {
                    i.followers = 100501;
                    i.active = true;
                    console.log(i);
                    localStorage.setItem("users", JSON.stringify(allUsers));
                }

                else if (i.active === true) {
                    i.followers = 100500;
                    i.active = false;
                    console.log(i);
                    localStorage.setItem("users", JSON.stringify(allUsers));
                };
                handleColorChange();
                handleTextChange();
                localStorage.setItem("users", JSON.stringify(allUsers))
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
                    style={{ backgroundColor: buttonColor }}
        color={buttonColor}
                >
                    <BtnText id="btnText"> 
                        {btnText}
                        
                    </BtnText>
                    
                </FollowBtn>
            </TweetBox>
        </>
    )
}