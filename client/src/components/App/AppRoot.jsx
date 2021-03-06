// Dependencies
import React, { useEffect, useState } from "react";
// Styled components
import { ThemeProvider } from "styled-components";
import { AppRoot } from "./styles";
// Misc
import themes from "../../utils/styles/themes";
import { GlobalStyles } from "../../utils/styles/global";
import ThemePicker from "../ThemePicker";

/**
 * @author
 * @function AppRoot
 **/

const AppComponent = ({ children }) => {
  const [themer, setThemer] = useState();
  const ls = localStorage;

  useEffect(() => {
    if (ls.getItem("theme") === null) ls.setItem("theme", JSON.stringify("blue"));
  });

  useEffect(() => {
    setThemer(JSON.parse(ls.getItem("theme")));
  }, [ls]);

  const getTheme = (value) => {
    setThemer(value);
  };

  useEffect(() => {
    if (themer) {
      ls.setItem("theme", JSON.stringify(themer));
    }
  }, [ls, themer]);

  return (
    <ThemeProvider theme={{ active: themes[themer ? themer : "blue"] }}>
      <AppRoot>
        <GlobalStyles />
        <ThemePicker setTheme={getTheme} activeTheme={themer} />
        {children}
      </AppRoot>
    </ThemeProvider>
  );
};

export default AppComponent;
