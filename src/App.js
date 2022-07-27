import React, { useState } from "react";
import Header from "./Components/Header";
import LangContext from "./Context/langContext";
import Body from "./Components/Body";

const App = () => {
  const langHook = useState("hn");
  return (
    <LangContext.Provider value={langHook}>
      <div>
        <Header />
        <Body />
      </div>
    </LangContext.Provider>
  );
};

export default App;
