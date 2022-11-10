import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import ThreeTierPricing from "@components/Pricing";
import theme from "./theme";
import Fonts from "./Fonts";

import useObserver from "./hooks/useObserver";

function App() {
  const [currentVisibleIndex, setcurrentVisibleIndex] = useState(0);

  const handleVisible = (index) => {
    return () => {
      setcurrentVisibleIndex(index);
    };
  };
  const heroRef = useObserver(handleVisible(0));
  const featRef = useObserver(handleVisible(1));
  const statisRef = useObserver(handleVisible(2));
  const threeRef = useObserver(handleVisible(3));
  const heroTRef = useObserver(handleVisible(4));
  const footRef = useObserver(handleVisible(5));

  // const heroRef = useRef(null);
  // const divRef = useRef(null);
  // console.log(divRef, "렌더링");
  // useEffect(() => {
  //   console.log(divRef, "이펙트");
  //   console.log(heroRef, "이펙트");
  // }, []);

  const handleClickNavLink = (index) => {
    const refs = [heroRef, featRef, statisRef, threeRef, heroTRef, footRef];
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };

  return (
    <ChakraProvider theme={theme}>
      {/* <div ref={divRef}>나는 디브</div> */}
      <Fonts />
      <NavBar
        currentVisibleIndex={currentVisibleIndex}
        onClickNavLink={handleClickNavLink}
      />
      <Hero ref={heroRef} />
      <Features ref={featRef} />
      <Statistics ref={statisRef} />
      <ThreeTierPricing ref={threeRef} />
      <HeroTwo ref={heroTRef} />
      <Footer ref={footRef} />
    </ChakraProvider>
  );
}

export default App;
