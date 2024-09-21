import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  python,
  sql,
  c,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  applebone,
  ballistic,
  cmm,
  sekoia,
  txsols,
  accurate,
  alzeer,
  arthrits,
  aziv,
  ecopro,
  handsoff,
  lyft,
  mwf,
  outreach,
  sanamed,
  sinfull,
  tielink,
  wax,
  zoom,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress,
  sapient,
  mwficon,
  office,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: c,
  },
  {
    name: "SQL",
    icon: sql,
  }, 

  {
    name: "Offices",
    icon: office,
  }, 
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Department of IT at HCMC University.",
    icon: mwficon,
    iconBg: "#383E56",
    date: "February to May, 2024",
    points: [
      "Get tasks from a project manager.",
      "Assisted in programming functionalities for two university websites.",
      "Coordinated with relevant parties to provide support, inspection, and repairs as required.",

    ],
  },
];


const projects = [
	{
		name: "Predict Potential Dropout Students",
		description:
			"Applying data analysis processes in the field of data science to predict students at risk of dropping out. Storing input and output data in the database",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Postgresql",
				color: "pink-text-gradient",
			},
		],
		image: "./src/assets/LearningCurve.webp",
		source_code_link:
			"https://github.com/CDKhoaaaa/Graduation_Thesis",
	},

	{
		name: "ETL Application (E,T)",
		description:
			"The application interface provides the functionality to upload data from CSV, Excel, and perform data cleaning steps.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
		],
		image: "./src/assets/ETL.webp",
		source_code_link: "https://github.com/CDKhoaaaa/ETL.git",
	},
	{
		name: "Dashboard HRM",
		description:
			"Using HRM data from Kaggle to build a dashboard with Power BI.",
		tags: [
			{
				name: "DAX",
				color: "blue-text-gradient",
			},
      {
				name: "M",
				color: "pink-text-gradient",
			},

		],
		image: "./src/assets/PowerBI_QLNS1.webp",
		source_code_link: "https://github.com/CDKhoaaaa/HRM_Dashboard_Report.git",
	},
	{
		name: "Clothing Store Website",
		description:
			"The CRUD functions for managing products, categories, and members are implemented within the MVC architecture using the .NET framework, enabling efficient data creation, retrieval, update, and deletion operations.",
		tags: [
			{
				name: "C#",
				color: "blue-text-gradient",
			},
			{
				name: "MVC",
				color: "orange-text-gradient",
			},
		],
		image: "./src/assets/clothing.webp",
		source_code_link: "https://github.com/CDKhoaaaa/NIIE_EcomWebsite.git ",
	},
	{
		name: "Simple Crawling Data",
		description:
			"Scraping basic score data from a score lookup website using Selenium",
		tags: [
			{
				name: "Py",
				color: "blue-text-gradient",
			},
		],
		image: "./src/assets/portfoliosample.webp",
		source_code_link: "https://github.com/CDKhoaaaa/Simple_Crawling_Data.git",
	},
];

export { services, technologies, experiences, projects};
