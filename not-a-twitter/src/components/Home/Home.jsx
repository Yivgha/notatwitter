import Layout from "../Layout/Layout";
import { Title } from "../../styles/global.styled";
import { BoxText, HomeImg, HomeLink } from "./Home.styled";

const catava = require("../../../public/images/cat-min.jpg");

export default function Home() {
    return (
        <Layout>
         <Title>Welcome Home!</Title>
        <BoxText>Read all tweets{' '}
          <HomeLink href='/tweets/tweets'>
            on this page
            </HomeLink>
          !
        </BoxText>
        <HomeImg src={catava} alt="cat avatar" priority={true} />
        </Layout>
    )
};