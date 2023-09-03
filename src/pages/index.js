import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Pc Assemble</title>
        <meta
          name="description"
          content="This is a pc builder web site made by next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <p>This is home page</p>
    </>
  );
};

export default HomePage;


// Call for Layout 
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};