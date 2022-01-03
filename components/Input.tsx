import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { RootState } from "features";
import { useSelector } from "react-redux";

interface InputProps {
  searchResult: string;
  handleSearchUser: () => void;
  setSearchResult: Dispatch<SetStateAction<string>>;
}

export default function Input({
  searchResult,
  setSearchResult,
  handleSearchUser,
}: InputProps) {
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
      className="input"
    >
      <Image
        className="input__image"
        src="/icon-search.svg"
        alt="Search Button"
        width="25px"
        height="25px"
        layout="fixed"
      />
      <input
        className="input__input"
        type="text"
        onChange={(e) => setSearchResult(e.target.value)}
        value={searchResult}
        placeholder="Search Github Username....."
      />
      <button className="input__button" onClick={() => handleSearchUser()}>
        Search
      </button>
    </div>
  );
}
