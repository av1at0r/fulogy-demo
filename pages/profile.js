import Head from "next/head";
import React from "react";
import BaseLayout from "../src/components/BaseLayout";
import Header from "../src/components/Header";
import useLoadLocalProfile from "../src/features/Profile/hooks/useLoadLocalProfile";
import useProfileInfo from "../src/features/Profile/hooks/useProfileInfo";
import ProfileView from "../src/features/Profile/ProfileView";

export default function profile() {
  useLoadLocalProfile();
  const { shortName } = useProfileInfo();
  return (
    <BaseLayout>
      <Head>
        <title>Личный Профиль</title>
      </Head>
      <Header name={shortName} />
      <ProfileView />
    </BaseLayout>
  );
}
