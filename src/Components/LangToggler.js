import React, { useContext } from "react";
import LangContext from "../Context/langContext";

const LangToggler = () => {
  const [lang, setLang] = useContext(LangContext);
  return (
    <button
      onClick={() => {
        setLang(
          lang === "en"
            ? "hn"
            : lang === "hn"
            ? "sn"
            : lang === "sn"
            ? "en"
            : "hn"
        );
      }}
    >
      {lang === "en"
        ? "हिन्दी"
        : lang === "hn"
        ? "Spanish"
        : lang === "sn"
        ? "English"
        : "Hindi"}
    </button>
  );
};
export default LangToggler;
