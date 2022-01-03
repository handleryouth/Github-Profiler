import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "features";
import { GithubResponseData } from "types";
import Input from "components/Input";
import Content from "../components/Content";
import { useCallback, useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const responseData = await axios
    .get("https://api.github.com/users/octocat")
    .then((res) => {
      return res.data;
    });

  return {
    props: { datas: responseData },
  };
};

export default function Home({
  datas,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { darkTheme } = useSelector((state: RootState) => state.theme);
  const [user, setUser] = useState<GithubResponseData>(datas);
  const [searchResult, setSearchResult] = useState("");

  const handleSearchUser = useCallback((value: string) => {
    axios
      .get(`https://api.github.com/users/${value}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={
        darkTheme
          ? { backgroundColor: "#141d2f", color: "white" }
          : { backgroundColor: "white", color: "#4B6A9B" }
      }
      className="home"
    >
      <Head>
        <title>Github Project using Nextjs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Githup Profile Searcher" />
        <meta
          name="keywords"
          content="NextJS, SCSS, React, Github, handleryouth, Redux"
        />
        <meta name="author" content="handleryouth" />
      </Head>

      <div className="home__input">
        <Input
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          handleSearchUser={() => handleSearchUser(searchResult)}
        />
      </div>

      <div className="home__content">
        <Content {...user} />
      </div>
    </div>
  );
}
