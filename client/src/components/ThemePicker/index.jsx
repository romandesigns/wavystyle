// Dependencies
import React, { useEffect, useState } from "react";

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
      <form>
        <label htmlFor="dark">
          <input type="radio" name="theme" value="dark" id="dark" onChange={(e) => setTheme(e.target.value)} checked={active === "dark" ? true : false} />
        </label>
        <label htmlFor="blue">
          <input type="radio" name="theme" value="blue" id="blue" onChange={(e) => setTheme(e.target.value)} checked={active === "blue" ? true : false} />
        </label>
        <label htmlFor="light">
          <input type="radio" name="theme" value="light" id="light" onChange={(e) => setTheme(e.target.value)} checked={active === "light" ? true : false} />
        </label>
      </form>
    </>
  );
};

export default ThemePicker;
