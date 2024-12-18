import HomePage from "../assets/images/projects/unicite/HomePage.png";

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
  title: "Unicité",
  content: "Built a full-stack online store using Node.js, Express.js, and MongoDB, with a responsive client-side interface developed in React. Manage products, customers, and orders data in MongoDB. Integrate Firebase authentication and API functionalities, including Google Maps API, forenhanced usability and security. ",
  image: HomePage,
  id: "unicite",
},
];
