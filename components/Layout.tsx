import { RootState } from "features";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  const { darkTheme } = useSelector((state: RootState) => state.theme);
  return (
    <div
      style={
        darkTheme
          ? { backgroundColor: "#1e2a47" }
          : {
              backgroundColor: "white",
            }
      }
    >
      <Navbar />
      {children}
    </div>
  );
}
