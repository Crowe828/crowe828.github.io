import SplashPage from "../SplashPage/SplashPage";
import RevealWrapper from "../../Components/Reveal/RevealWrapper";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./main.css";

const Main = () => {
  return (
    <div className="background">
      <Nav />
      {/* <SplashPage /> */}
      <RevealWrapper />
      <Footer />
    </div>
  );
};

export default Main;
