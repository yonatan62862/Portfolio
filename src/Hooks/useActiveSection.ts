import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      if (!isScrolling) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); 
          }
        });
      }
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (location.pathname !== "/") {

      navigate("/", { replace: true });
      setTimeout(() => {
        const homeSection = document.getElementById(id);
        if (homeSection) {
          setIsScrolling(true);
          homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000); 
        }
      }, 300);
    } else if (section) {
      setIsScrolling(true);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return { activeSection, scrollToSection };
};
