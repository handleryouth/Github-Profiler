import Image from "next/image";
import { useState, useContext } from "react";
import axios from "axios";
import { profileData } from "../pages";

export default function Input() {
  const { darkTheme, setSearchResult } = useContext(profileData);
  const [user, setUser] = useState("");

  const handleSearchUser = (value) => {
    axios
      .get(`https://api.github.com/users/${value}`)
      .then((res) => setSearchResult(res.data))
      .catch((err) => console.log(err));
  };

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
      className="input"
    >
      <Image
        className="input__image"
        src="/icon-search.svg"
        alt="Search Button"
        width="25px"
        height="25px"
      />
      <input
        className="input__input"
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        placeholder="Search Github Username....."
      />
      <button className="input__button" onClick={() => handleSearchUser(user)}>
        Search
      </button>
    </div>
  );
}
