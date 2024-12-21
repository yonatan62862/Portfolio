import { useTitle } from "../../Hooks/useTitle";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Education from "./Education";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import HeroSection from "./HomePage";
import Projects from "./Projects";
import Services from "./Services";

export default function Main(): JSX.Element {
  useTitle("Yonatan Cohen");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <main className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
        <HeroSection />
        <AboutMe />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <Projects />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <Education />
        <div className="border-b border-gray-300 dark:border-gray-700"></div>
        <Services />
        <ContactMe />
      </main>
    </>
  );
}
