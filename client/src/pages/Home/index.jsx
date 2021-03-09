// Dependencies
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Styles
import * as HOME from "./styles";
/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  const [theme, setTheme] = useState();
  const currentTheme = useSelector((theme) => theme);

  useEffect(() => {
    setTheme(currentTheme.theme);
  }, [currentTheme]);

  console.log(theme);
  // console.log(theme);
  return (
    <HOME.Home>
      <header>
        <h2>Welcome to WavyStyle</h2>
        <p>I Plain, Design and Develope!</p>
        <div>
          <button>Development</button>
          <button>Desings</button>
        </div>
      </header>
      <section>
        <figure>
          <img src={`/img/png/${theme}-monitor.png`} alt="3d computer" />
        </figure>
      </section>
    </HOME.Home>
  );
};

export default HomePage;
