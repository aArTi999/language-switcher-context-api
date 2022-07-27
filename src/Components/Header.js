import React, { useContext } from "react";
import LangToggler from "./LangToggler";
import LangContext from "../Context/langContext";
import locale from "../locale";

const Header = () => {
  const language = useContext(LangContext)[0];
  const selectedLang = locale[language];
  return (
    <header>
      <h1>{selectedLang.heading}</h1>
      <LangToggler />
    </header>
  );
};

export default Header;
