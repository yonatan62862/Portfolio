import HomePage from "../assets/images/projects/movieclub/MovieClubHomePage.jpeg";
import LoginPage from "../assets/images/projects/movieclub/LoginPage.jpeg";
import ForumPage from "../assets/images/projects/movieclub/ForumPage.jpeg";
import ForumPage2 from "../assets/images/projects/movieclub/ForumPage2.jpeg";
import AboutPage from "../assets/images/projects/movieclub/AboutPage.jpeg";
import ProfilePage from "../assets/images/projects/movieclub/ProfilePage.jpeg";
import RegisterPage from "../assets/images/projects/movieclub/RegisterPage.jpeg";
import ImdbPage from "../assets/images/projects/movieclub/ImdbPage.jpeg";


import { ImageCarouselProps } from "../Types/ImageCarousel";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const movieclubData: ImageCarouselProps[] = [
  { image: HomePage, title: "HomePage" },
  { image: RegisterPage, title: "RegisterPage" },
  { image: LoginPage, title: "LoginPage" },
  { image: ForumPage, title: "ForumPage" },
  { image: ForumPage2, title: "ForumPage2" },
  { image: AboutPage, title: "AboutPage" },
  { image: ImdbPage, title: "ImdbPage" },
  { image: ProfilePage, title: "ProfilePage" },

];

export const movieclubProjectDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed a social network project for sharing movie recommendations called MovieClub.",
  },
  {
    title:
    "Developed server side in Node.js with Express and client side in React, ensuring a responsive and user-friendly interface.",
  },
  {
    title:
      "Wrote in Typescript",
  },
  {
    title:
      "Used JWT and Google Authentication for login and authentication.",
  },
  {
    title:
      "Used MongoDB for data management.",
  },
  {
    title:
      "Implemented a RESTful API with Express.js for backend communication.",
  },
  {
    title:
      "Implemented a forum page for users to discuss and share their favorite movies.",
  },
  {
    title:
      "Created an AI-connection with IMDb website to display movie details and ratings.",
  },
  {
  title:
  "Documented the server-side API using Swagger for clear and accessible API reference.",
},
];
