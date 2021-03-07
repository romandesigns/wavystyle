// Dependencies
import React, { useEffect, useState } from "react";
// Styles
import { Form as FORM } from "./styles";
/**
 * @author
 * @function ThemePicker
 **/

const ThemePicker = ({ setTheme, activeTheme }) => {
  const [active, setActive] = useState(activeTheme);

  useEffect(() => {
    setActive(activeTheme);
  }, [activeTheme]);

  return (
    <>
      <FORM>
        <label htmlFor="dark" title="Dark Theme">
          <input type="radio" name="theme" value="dark" id="dark" onChange={(e) => setTheme(e.target.value)} checked={active === "dark" ? true : false} />
        </label>
        <label htmlFor="blue" title="Blue Theme">
          <input type="radio" name="theme" value="blue" id="blue" onChange={(e) => setTheme(e.target.value)} checked={active === "blue" ? true : false} />
        </label>
        <label htmlFor="light" title="Light Theme">
          <input type="radio" name="theme" value="light" id="light" onChange={(e) => setTheme(e.target.value)} checked={active === "light" ? true : false} />
        </label>
      </FORM>
    </>
  );
};

export default ThemePicker;
