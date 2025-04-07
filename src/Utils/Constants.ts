import UniciteHomePage from "../assets/images/projects/unicite/UniciteHomePage.png";
import EventifyHomePage from "../assets/images/projects/eventify/EventifyHomePage.png"
import MovieclubHomePage from "../assets/images/projects/movieclub/MovieClubHomePage.jpeg";

export const navItems = [
  { section: "about" },
  { section: "projects" },
  { section: "education" },
  { section: "services" },
  { section: "contact" },
];

export type Project = {
  title: string;
  content: string;
  image: string;
  id: string;
};


export const projects: Project[] = [
{
  id: "unicite",
  title: "Unicité",
  content: "Developed and designed a full-stack online store using Node.js, Express.js, and MongoDB, with a responsive client-side interface built in React.",
  image: UniciteHomePage,
},
{
  id: "MovieClub",
  title: "MovieClub",
  content: "Developed a social network project for sharing movie recommendations called MovieClub.",
  image: MovieclubHomePage,
},
{
  id: "Eventify",
  title: "Eventify",
  content: "Developed an app for managing events and sharing photos and memories between event guests in a convenient and accessible way.",
  image: EventifyHomePage,
}
];
