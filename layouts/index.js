import { useState } from "react";
import Head from "next/head";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { GlobalStyles } from "../theme/globals";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import { GA_TRACKING_ID } from "../lib/gtag";

const DefaultLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
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
        <link rel="icon" href="Logo.png" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"
          integrity="sha256-Wua0LsQkGDEeIkbmBNjj9wcThJh5uCD6R8+5YQhXveQ="
          crossorigin="anonymous"
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default DefaultLayout;
