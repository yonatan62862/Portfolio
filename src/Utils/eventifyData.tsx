import HomePage from "../assets/images/projects/eventify/EventifyHomePage.png";
import LoginPage from "../assets/images/projects/eventify/LoginPage.png";
import NewEventPage from "../assets/images/projects/eventify/NewEventPage.png";
import GoogleCalendarApiPage from "../assets/images/projects/eventify/GoogleCalendarApiPage.png";
import MyProfilePage from "../assets/images/projects/eventify/MyProfilePage.png";
import RegisterPage from "../assets/images/projects/eventify/RegisterPage.png";
import MyEventsPage from "../assets/images/projects/eventify/MyEventsPage.png";


import { ImageCarouselProps } from "../Types/ImageCarousel";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const eventifyData: ImageCarouselProps[] = [
  { image: HomePage, title: "HomePage" },
  { image: RegisterPage, title: "RegisterPage" },
  { image: LoginPage, title: "LoginPage" },
  { image: NewEventPage, title: "NewEventPage" },
  { image: GoogleCalendarApiPage, title: "GoogleCalendarApiPage" },
  { image: MyProfilePage, title: "MyProfilePage" },
  { image: MyEventsPage, title: "MyEventsPage" },
];

export const eventifyProjectDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed an app for managing events and sharing photos and memories between event guests in a convenient and accessible way.",
  },
  {
    title:
      "Wrote in Kotlin language.",
  },
  {
    title:
      "Used ROOM, Firestore and Cloudinary for data management.",
  },
  {
    title:
      "Used Firebase Authentication to authenticate users.",
  },
];
