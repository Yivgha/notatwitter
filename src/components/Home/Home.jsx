import Layout from "../Layout/Layout";
import { Title } from "../../styles/global.styled";
import { BoxText, HomeImg, HomeLink } from "./Home.styled";

const catava = require("../../../public/cat.jpg");

export default function Home() {
    return (
        <Layout>
         <Title>Welcome Home!</Title>
        <BoxText>Read all tweets{' '}
          <HomeLink href='/tweets'>
            on this page
            </HomeLink>
          !
        </BoxText>
        <HomeImg src={catava} alt="cat avatar" priority={true} />
        </Layout>
    )
};