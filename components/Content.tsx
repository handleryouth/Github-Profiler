import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "features";
import { GithubResponseData } from "types";
import Repositories from "./Repositories";
import AdditionalDetail from "./AdditionalDetail";
import ProfileName from "./ProfileName";

export default function Content({
  avatar_url,
  public_repos,
  twitter_username,
  bio,
  name,
  login,
  following,
  followers,
  created_at,
  company,
  blog,
  location,
}: GithubResponseData) {
  const { darkTheme } = useSelector((state: RootState) => state.theme);
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
          layout="fixed"
        />
      </div>

      <div className="content__profilecontainer">
        <ProfileName created_at={created_at} login={login} name={name} />

        <p className="content__profilecontainer__bio">
          {bio ? bio : "The Writer doesn't wirte anything"}
        </p>

        <Repositories
          public_repos={public_repos}
          following={following}
          followers={followers}
        />

        <AdditionalDetail
          twitter_username={twitter_username}
          blog={blog}
          company={company}
          location={location}
        />
      </div>
    </div>
  );
}
