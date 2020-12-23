import Head from "next/head";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import styles from "../styles/Home.module.css";

export default function Home() {
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
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"
          integrity="sha256-Wua0LsQkGDEeIkbmBNjj9wcThJh5uCD6R8+5YQhXveQ="
          crossorigin="anonymous"
        ></script>
      </Head>

      <main>
        <Main />
        <About />
      </main>

      <footer>
        <div className={styles["container-4"]} id="contact">
          <p>© Hrak Torousian. All rights reserved. 2020</p>
        </div>
      </footer>
    </div>
  );
}
