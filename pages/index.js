import Main from "../components/Main/Main";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";
import DefaultLayout from "../layouts";

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <Main />
        <About />
        <Work />
        <Footer />
      </DefaultLayout>
    </div>
  );
}
