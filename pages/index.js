import Head from "next/head";
import Content from "../components/Content";
import Input from "../components/Input";
// import axios from "axios";
import { createContext, useState } from "react";
import Layout from "../components/Layout";

// export const getStaticProps = async () => {
//   const res = await axios.get("https://api.github.com/users/octocat");

//   return {
//     props: { datas: res.data },
//   };
// };

export const profileData = createContext();

export default function Home({ datas }) {
  // const [searchResult, setSearchResult] = useState(datas);
  // console.log(searchResult);
  const [darkTheme, setDarkTheme] = useState(true);

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
      </Head>
      {/* <profileData.Provider value={{ searchResult, setSearchResult }}> */}
      <profileData.Provider value={{ darkTheme, setDarkTheme }}>
        <Layout />

        <div>
          <Input />
        </div>

        <div>
          <Content />
        </div>
      </profileData.Provider>

      {/* </profileData.Provider> */}
    </div>
  );
}
