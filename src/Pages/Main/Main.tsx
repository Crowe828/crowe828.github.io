import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "../SplashPage/SplashPage";
import RevealWrapper from "../../Components/Reveal/RevealWrapper";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./main.css";

const Main = () => {
  const mainPage = () => {
    return (
      <div className="background">
        <Nav />
        <RevealWrapper />
        <Footer />
      </div>
    );
  };

  const splashPage = () => {
    return <SplashPage />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={splashPage()} />
        <Route path="/main" element={mainPage()} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
