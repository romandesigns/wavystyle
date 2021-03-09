// Dependencies
import React, { useEffect, useState } from "react";
// Styled components
import { ThemeProvider } from "styled-components";
// Misc
import themes from "../../utils/styles/themes";
import ThemePicker from "../ThemePicker";
import { GlobalStyles } from "../../utils/styles/global";

import { useDispatch } from "react-redux";
import { updateTheme } from "../../redux/actions/theme";

/**
 * @author
 * @function AppRoot
 **/

const AppComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "blue");
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    dispatch(updateTheme(currentTheme));
  }, [currentTheme, dispatch]);

  const getTheme = (value) => {
    setCurrentTheme(value);
  };

  return (
    <ThemeProvider theme={{ active: themes[currentTheme] }}>
      <GlobalStyles />
      <ThemePicker setTheme={getTheme} activeTheme={currentTheme} />
      {children}
    </ThemeProvider>
  );
};

export default AppComponent;
