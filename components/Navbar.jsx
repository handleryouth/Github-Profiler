import Image from "next/image";
import { useContext } from "react";
import { profileData } from "../pages";

export default function Navbar() {
  const { darkTheme, setDarkTheme } = useContext(profileData);
  return (
    <div className="navbar">
      <h1>Devfinder</h1>

      <div
        className="navbar__theme"
        onClick={() => setDarkTheme((prevState) => !prevState)}
      >
        <h3>{darkTheme ? "Light" : "Dark"}</h3>
        <Image
          src={darkTheme ? "/icon-sun.svg" : "/icon-moon.svg"}
          alt="Toggle Theme Icon"
          width="20px"
          height="20px"
        />
      </div>
    </div>
  );
}
