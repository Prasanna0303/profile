import { useEffect, useState } from "react";

import { AppMain } from "./app-styles";
import InitialLoader from "./sections/Loader";
import Navbar from "./sections/Navbar";
import Content from "./sections/content";
import Socials from "./sections/Socials";
import VerticalEmail from "./sections/Email";
import Footer from "./sections/Footer";
function AppContainer({ showLoaderAnimation }) {
  return (
    <AppMain>
      <Navbar showLoaderAnimation={showLoaderAnimation} />
      <Content />
      <Socials />
      <VerticalEmail />
      <Footer />
    </AppMain>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const hideShowLoader = () => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2350);
  };
  const showLoaderAnimation = () => {
    setShowLoader(true);
    hideShowLoader();
  };
  useEffect(() => {
    hideShowLoader();
  }, []);
  return showLoader ? (
    <InitialLoader />
  ) : (
    <AppContainer showLoaderAnimation={showLoaderAnimation} />
  );
}

export default App;
