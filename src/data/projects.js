import cc from "../images/cc.png";
import fbmarket from "../images/fbmarket.jpg";
import confluence from "../images/confluence.png";

export const fullProjects = [
  {
    title: "Cuisine Compass",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
    image: cc,
    link: "/project_folder/cuisine-compass"
  },
  {
    title: "JPMorganChase",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
    image: null, // Add image if available
    link: "/project_folder/jpmorgan-case"
  },
  {
    title: "JPMorganChase",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
    image: confluence,
    link: "/project_folder/jpmorgan-case"
  },
  {
    title: "Meta",
    meta: "Lorem • Lorem",
    description: "Boosting trust in Facebook Marketplace for young adults",
    image: fbmarket,
    link: "/project_folder/jpmorgan-case"
  }
];

export const homeProjects = fullProjects.slice(0, 4); // Top 4 for home, or customize as needed