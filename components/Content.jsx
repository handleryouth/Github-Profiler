import Image from "next/image";
import Repositories from "./Repositories";
import AdditionalDetail from "./AdditionalDetail";
import { useContext } from "react";
import { profileData } from "../pages";
import ProfileName from "./ProfileName";

export default function Content() {
  const { searchResult } = useContext(profileData);
  const { darkTheme } = useContext(profileData);
  const { avatar_url, bio } = searchResult
  return (
    <div
      style={
        darkTheme
          ? { backgroundColor: "#1e2a47" }
          : {
              backgroundColor: "white",
              boxShadow: "-1px -1px 5px 0px rgba(0,0,0,0.75)",
            }
      }
      className="content"
    >
      <div className="content__imagecontainer">
        <Image
          className="content__imagecontainer__image"
          src={avatar_url}
          alt="User Profile Picture"
          width="117px"
          height="117px"
        />
      </div>

      <div className="content__profilecontainer">
        <ProfileName />

        <p className="content__profilecontainer__bio">
          {bio !== "" ? bio : "The Writer doesn't wirte anything"}
        </p>

        <Repositories />

        <AdditionalDetail />
      </div>
    </div>
  );
}
