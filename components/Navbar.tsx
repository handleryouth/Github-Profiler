import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "features";
import { toggleTheme } from "features/theme";

export default function Navbar() {
  const { darkTheme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className="navbar"
      style={darkTheme ? { color: "white" } : { color: "black" }}
    >
      <h1>Devfinder</h1>

      <div className="navbar__theme" onClick={() => dispatch(toggleTheme())}>
        <h3>{darkTheme ? "Light" : "Dark"}</h3>

        <Image
          src={darkTheme ? "/icon-sun.svg" : "/icon-moon.svg"}
          alt="Toggle Theme Icon"
          width="20px"
          height="20px"
          layout="fixed"
        />
      </div>
    </div>
  );
}
