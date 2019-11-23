import React, { useState } from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes/routes";
import client from "./client";
import { ThemeContext, themes } from "./themeContext";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={themes}>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
