import { NextPage } from 'next';
import Head from 'next/head';
import TpoPageTemplate from '../components/template/TopPageTemplate';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>walnut - portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <TpoPageTemplate />
    </>
  );
};

export default TopPage;
