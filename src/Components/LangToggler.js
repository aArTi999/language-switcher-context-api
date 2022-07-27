import React, { useContext } from "react";
import LangContext from "../Context/langContext";

const LangToggler = () => {
  const [lang, setLang] = useContext(LangContext);
  return (
    <button
      onClick={() => {
        setLang(lang === "en" ? "hn" : "en");
      }}
    >
      {lang === "en" ? "हिन्दी" : "English"}
    </button>
  );
};
export default LangToggler;
