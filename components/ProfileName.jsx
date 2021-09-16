import { useContext } from "react";
import { profileData } from "../pages";
import format from "date-fns/format";

export default function ProfileName() {
  const { searchResult } = useContext(profileData);
  const { name, login, created_at } = searchResult;
  const convertedDate = format(new Date(created_at), "PPP");
  return (
    <div className="profilename">
      <div className="profilename__container1">
        <h2>{name}</h2>
        <p>Joined {convertedDate}</p>
      </div>

      <div className="profilename__container2">
        <p>@{login}</p>
      </div>
    </div>
  );
}
