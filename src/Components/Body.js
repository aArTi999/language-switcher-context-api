import React, { useContext } from "react";
import LangContext from "../Context/langContext";
import locale from "../locale";
import "../App.css";
const Body = () => {
  const language = useContext(LangContext)[0];
  const selectedLang = locale[language];
  return (
    <div>
      <h2>{selectedLang.greet}</h2>
      <p>{selectedLang.wellBeing}</p>
      <p>{selectedLang.gratitude}</p>
    </div>
  );
};

export default Body;
