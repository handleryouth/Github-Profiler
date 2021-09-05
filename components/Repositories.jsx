import { useContext } from "react";
import { profileData } from "../pages";

export default function Repositories() {
  // const{searchResult} = useContext(profileData)
  const { darkTheme } = useContext(profileData);

  //   const{repos, following, followers} = searchResult
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
        <p>Repos</p>
        <p className="repositories__repos__value">6969</p>
      </div>

      <div className="repositories__following">
        <p>Following</p>
        <p className="repositories__following__value">6969</p>
      </div>

      <div className="repositories__followers">
        <p>followers</p>
        <p className="repositories__followers__value">6969</p>
      </div>
    </div>
  );
}
