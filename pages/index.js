import Head from "next/head";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";

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
        <Main />
        <About />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
