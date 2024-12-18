import HomePage from "../assets/images/projects/unicite/HomePage.png";
import Categories from "../assets/images/projects/unicite/Categories.png";
import CartPage from "../assets/images/projects/unicite/CartPage.png";
import CheckoutPage from "../assets/images/projects/unicite/CheckoutPage.png";
import ContactPage from "../assets/images/projects/unicite/ContactPage.png";
import AboutPage from "../assets/images/projects/unicite/AboutPage.png";

import { ImageCarouselProps } from "../Types/ImageCarousel";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const uniciteData: ImageCarouselProps[] = [
  { image: HomePage, title: "Home Page" },
  { image: Categories, title: "Categories" },
  { image: CartPage, title: "Cart Page" },
  { image: CheckoutPage, title: "Checkout" },
  { image: AboutPage, title: "About" },
  { image: ContactPage, title: "Contact" },
];

export const uniciteProjectDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed a e-commerce store platform using React and Node.js with JavaScript.",
  },
  {
    title:
      "Back-End Development with Node.js and Express - Implemented a robust server-side infrastructure to enable data storage, retrieval, and management using MongoDB.",
  },
  {
    title:
      "Management of Two Core Models - Fully implemented models for managing products and customers supporting creation, updates, deletion, search, and listing of objects.",
  },
  {
    title:
      "Advanced Search Queries - Added search functionalities allowing customers to filter results using at least three parameters.",
  },
  {
    title:
      "Secure Access Control System - Developed an admin interface with authentication using username and password, granting unique permissions for administrators to perform advanced actions such as managing products and viewing orders.",
  },
  {
    title:
      "Dynamic Shopping Cart - Built a shopping cart feature enabling users to add products and complete orders while maintaining a seamless purchase process.",
  },
  {
    title:
      "Error Handling and Comprehensive Validation - Implemented edge-case handling and validations on both the client side (React) and server side, ensuring the system remains stable even with unexpected inputs or behaviors.",
  },
  {
    title:
      "Access to add and retrieve data - the admin will be able to add and retrieve data both through the browser and through the database",
  },
];
