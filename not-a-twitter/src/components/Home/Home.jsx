import { Title } from "../../styles/global.styled";
import Layout from "../Layout/Layout";
import Link from 'next/link';
import Image from 'next/image';

const catava = require("../../../public/images/cat-min.jpg");
export default function Home() {
    return (
        <Layout>
         <Title className='title'>Home</Title>
        <h2>Read all tweets{' '}
          <Link href='/tweets/tweets' style={{ color: 'blue' }}>
            on this page!
          </Link>
        </h2>
            <Image src={catava} alt="cat avatar" width={144} height={144} />
        </Layout>
    )
};