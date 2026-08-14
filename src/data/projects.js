import cc from "../images/cc.png";
import facebook_marketplace_logo from "../images/facebook-marketplace-logo.jpg";
import confluence from "../images/confluence.png";
import jpmc from "../images/jpmc.svg";

export const fullProjects = [
	{
		title: "Cuisine Compass",
		meta: "UX • Product Design",
		description: "A digital cookbook platform where users can discover, save, and share recipes.",
		image: cc,
		link: "/project_folder/cuisine-compass",
	},
	{
		title: "ICM",
		meta: "Internal Tools • UX",
		description: "Redesigning an internal case management workflow for clarity and efficiency.",
		image: jpmc,
		link: "/project_folder/icm",
	},
	{
		title: "Reskin",
		meta: "Design System • UI Refresh",
		description: "Refreshing a legacy experience to better align with modern product standards.",
		image: confluence,
		link: "/project_folder/reskin",
	},
	{
		title: "Meta Marketplace",
		meta: "Trust • UX Research",
		description: "Boosting trust in Facebook Marketplace for young adults through clearer experiences.",
		image: facebook_marketplace_logo,
		link: "/project_folder/meta",
	},
];

export const homeProjects = fullProjects.slice(0, 4);