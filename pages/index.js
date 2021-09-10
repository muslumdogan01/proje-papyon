import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Content from "../Components/Content";
import ContentItem from "../Components/ContentItem";

function HomePage() {
  return (
    <Layout>
      <Head>
      <title>Ana Sayfa</title>
      </Head>
      <Content />
      <ContentItem />
    </Layout>
  );
}

export default HomePage;
