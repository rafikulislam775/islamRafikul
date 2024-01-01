import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewportEnter = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="app">
      <ScrollToTop
        component={
          <p className="text-pink-500 p-1 text-5xl">
            <IoIosArrowDropup size={32} />
          </p>
        }
        smooth
      ></ScrollToTop>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-full mx-auto md:h-full relative">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing
          setSelectedPage={setSelectedPage}
          onViewportEnter={() => handleViewportEnter("home")}
        />
        <MySkills
          onViewportEnter={() => handleViewportEnter("skills")}
        ></MySkills>
        <Projects
          onViewportEnter={() => handleViewportEnter("projects")}
        ></Projects>
        <Testimonials
          onViewportEnter={() => handleViewportEnter("testimonials")}
        ></Testimonials>
        <Contact
          onViewportEnter={() => handleViewportEnter("contact")}
        ></Contact>
        <Footer />
      </div>
    </div>
  );
}

export default App;
