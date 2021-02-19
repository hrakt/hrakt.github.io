import { useState } from "react";

import Head from "next/head";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
import Nav from "../components/Nav/Nav";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/globals";
import Skills from "../components/Skills/Skills";

export default function Home() {
  const sectionArr = ["About", "Work", "Blog"];
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hrak Torousian</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"
            integrity="sha256-Wua0LsQkGDEeIkbmBNjj9wcThJh5uCD6R8+5YQhXveQ="
            crossorigin="anonymous"
          ></script>
        </Head>

        <main>
          <Nav sectionArr={sectionArr} darkMode={darkMode} />
          <Main />
          <About />
          {/* <Skills /> */}
          <Work />
          {/* <DarkModeToggle toggle={toggle} darkMode={darkMode} /> */}
          <Footer />
        </main>
      </ThemeProvider>
    </div>
  );
}
