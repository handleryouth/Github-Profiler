import { useContext } from "react";
import { profileData } from "../pages";

export default function Repositories() {
  const { darkTheme, searchResult } = useContext(profileData);
  console.log(searchResult)
  const { public_repos, following, followers } = searchResult;
  return (
    <div
      className="repositories"
      style={
        darkTheme
          ? { backgroundColor: "#1e2a47" }
          : {
              backgroundColor: "white",
              boxShadow: "-1px -1px 5px 0px rgba(0,0,0,0.75)",
            }
      }
    >
      <div className="repositories__repos">
        <p className="repositories__following__title">Repos</p>
        <p className="repositories__repos__value">{public_repos}</p>
      </div>

      <div className="repositories__following">
        <p className="repositories__following__title">Following</p>
        <p className="repositories__following__value">{following}</p>
      </div>

      <div className="repositories__followers">
        <p className="repositories__following__title">followers</p>
        <p className="repositories__followers__value">{followers}</p>
      </div>
    </div>
  );
}
