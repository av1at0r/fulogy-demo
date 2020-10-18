import Head from 'next/head';
import React from "react";
import BaseLayout from "../src/components/BaseLayout";
import Header from "../src/components/Header";

export default function profile() {
  return (
    <BaseLayout>
      <Head>
        <title>Личный Профиль</title>
      </Head>
      <Header></Header>
    </BaseLayout>
  );
}
