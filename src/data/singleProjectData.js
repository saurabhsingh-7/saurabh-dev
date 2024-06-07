// Import images
import Image1 from '../images/ui-project-1.jpg';
import bamboo3 from '../images/bamboo3.png';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import bamboo1 from '../images/Bamboo1.png';
import bamboo2 from '../images/Bamboo2.png';

import twentystCentury from '../images/21century1.png';
import twentystCentury1 from '../images/21stCentury2nd.png';
import twentystCentury2 from '../images/21century3.png';
import twentystCentury3 from '../images/21stcentury4.png';


import Auditize2 from '../images/Auditize1.png';
import Auditize3 from '../images/Auditize3.png';
import Auditize4 from '../images/Auditize4.png';

import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: ['Bamboo Platform', 'Auditize', '21st Century'],
		publishDate: ['May 18, 2023', 'November 29, 2023', 'March 26, 2024'],
				tags: 'Frontend'
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project jjjjjj UI',
	      	img: [bamboo1,Auditize2,twentystCentury1],
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: [bamboo2,Auditize3,twentystCentury],
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: [bamboo3 ,Auditize4,twentystCentury2 ],
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			['To evaluate and categorize organizations based on their responses to targeted questions, enabling tailored recommendations and strategic insights through a dual-interface application comprising distinct admin and client modules.','Our objective is to develop an advanced CMS tailored for auditing processes, offering robust user management, document control, audit planning, and incident tracking features.', 'Our objective is to develop a comprehensive web application for efficient business management, integrating user roles, data synchronization, and intuitive user experience.'],
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
				    'Reusable Components',
					'React.js',
					'Nest.js',
					'AWS (EC2)',
					'Docker',
					'My SQL',
					'Tailwind CSS',
					'TypeScript',
					'Material UI',
					'Styled Components',
					'RTK Query',
					'Redux Toolkit',
	                'useForm'
				],
			},
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'React.js',
					'Node.js',
					'Tailwind CSS',
					'Mongo Db',
				    'Redux Toolkit',
				    'ReacT Custom Component',
					'Reusable Component',
					'Chart.js'
				],
			},
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'React.js',
					'Tailwind CSS',
					'TypeScript',
					'Mongo DB',
					'Material UI',
					'Chart.js',
					'Styled Components',
					'Redux Toolkit',
	                
				],
			},
		],
		ProjectDetailsHeading: 'About Project',
		ProjectDetails: [
			{
				id: 1,
				details:
					['This project is designed as a comprehensive digital platform that allows detailed interaction between administrators and client organizations through two separate applications: the admin side and the client side. The primary goal of the project is to facilitate the categorization of organizations based on specific answers they provide to a curated set of questions. This evaluation process is supported by a robust backend where administrators can manage questions, categories, outputs, data sheets, and learning modules.', 'The project endeavors to create a sophisticated Content Management System (CMS), specifically designed to streamline auditing processes for businesses. Built on a tech stack comprising Laravel backend, PostGre database, React frontend, and hosted on a Cloud-Based Ubuntu Server, our solution ensures scalability, security, and optimal performance.', 'Our project endeavors to create a sophisticated web application aimed at streamlining business operations through advanced functionalities and intuitive design. Leveraging a technology stack comprising React.js for the frontend, Laravel for the backend, and MySQL as the database, our solution ensures scalability, reliability, and seamless integration with third-party services like Bitrix24. Hosting options include AWS or a specified cloud hosting server to ensure optimal performance and accessibility.'],
			},
			{
				id: 2,
				details:
					['On the admin side, the application is equipped with several key modules. The question module allows administrators to create and modify questions that are pivotal in assessing the organizations. Categories are managed through a dedicated category module where new categories can be created based on emerging data or strategic needs. The output module provides functionality to add and edit the feedback or results generated from the organization assessments. Additionally, the data sheet module serves as a repository for storing and editing factual data collected or required during the evaluation process. The learning module is designed to offer educational resources and training materials to help both administrators and organizations understand and utilize the system effectively.' , 'At its core, the CMS consists of two main components: the Admin Portal and the User Portal. The Admin Portal empowers administrators with comprehensive user management capabilities, including enabling/disabling accounts, extending portal validity, adding new users, and managing document templates and site settings. On the other hand, the User Portal provides users with a suite of tools for efficient audit planning, execution, document management, non-conformance handling, incident tracking, task management, and user account management.', 'The primary objective revolves around addressing key challenges in business management, including user role management, data integrity, and user experience optimization. Through meticulous user management functionalities, the system enables admin-only user creation and offers multiple user roles with tailored permissions, catering to specific tasks and responsibilities such as bidding, business development management (BDM), and operations.',],
			},
			{
				id: 3,
				details:
					['Conversely, the client application focuses on the user experience of the organizations being evaluated. It includes a customer module where new clients can register and manage their profiles. The My Plan module enables these organizations to view their assessment results, categorized information, and receive customized recommendations based on their evaluation outcomes. This allows organizations to plan strategically, addressing weaknesses and leveraging strengths as identified through the platform.' , 'Audit execution within the CMS involves meticulous management of audit processes, starting from listing audits to detailed examination and classification of audit elements. Users can access a comprehensive list of audits, enabling them to efficiently navigate, view, and edit audit details as needed. Each audit is presented with pertinent information and categorized into distinct steps or classifications, facilitating thorough examination and evaluation. Users can seamlessly transition between audit elements, review associated data, and update statuses or comments as required, ensuring accurate and transparent audit execution. The system provides intuitive interfaces for streamlined interaction, empowering users to effectively carry out audits while maintaining compliance and operational integrity.', 'Central to the project is the seamless integration of data from multiple sources, including supplier feeds and Bitrix24 API, eliminating the need for direct data addition and ensuring data accuracy and completeness. The applications user experience design prioritizes simplicity and efficiency, with intuitive navigation and access to essential features, enhancing productivity and user satisfaction.'],
			},
			{
				id: 4,
				details:
					['Lastly, the inclusion of a funnel analysis module in the client app provides organizations with advanced analytical tools to generate detailed reports. These reports help in understanding the conversion and retention strategies that work best for them based on the data-driven insights provided by the platform. This dual-interface approach ensures that while administrators have the tools needed to manage and categorize data effectively, client organizations receive actionable insights and recommendations tailored to foster growth and efficiency.' , 'Non-conformance management within the CMS encompasses the systematic identification, recording, and resolution of deviations from established standards or requirements. Users can access a centralized repository of non-conformances, facilitating easy listing, addition, and editing of non-conformance details. Each entry includes comprehensive information such as overview, corrective action requests (CAR), auditor comments, and associated tasks. Through intuitive interfaces, users can efficiently manage non-conformance statuses, initiate corrective actions, and track resolution progress. Additionally, the system supports collaborative decision-making by enabling discussions on non-conformance details, ensuring timely and effective resolution while enhancing organizational quality and compliance efforts.', 'Efforts are directed towards ensuring smooth data migration from existing systems, coupled with caching mechanisms and background processing for quick data access and regular updates. The implementation of search functionality and pagination across all modules further enhances data retrieval and navigation.'],
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			// {
			// 	id: 5,
			// 	name: 'Youtube',
			// 	icon: <FiYoutube />,
			// 	url: 'https://www.youtube.com/',
			// },
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image1,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
