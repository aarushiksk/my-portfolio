import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Google Student Developers Club BBDITM',
		description: 'Mentoring 1st year and sophomore students to facilitate their understanding of AI/ML technologies, fostering a collaborative learning atmosphere. <br> Collaborating with industry experts to curate and host engaging workshops focused on ML and related domains, contributing to students exposure to current industry trends.',
		contract: ContractType.FullTime,
		type: 'Mentor',
		location: 'BBDITM',
		period: { from: new Date(2023, 8, 5), to: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'AI/ML Mentor',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Google Student Developers Club is a dynamic community that empowers students to explore, learn, and contribute to cutting-edge technologies provided by Google.'
	},
	{
		slug: 'software-freelance',
		company: 'Copilotify.app',
		description: 'Conceptualized and architected AI-powered Telegram bots that interact with users to gather study preferences and goals.<br> Implemented Node.js for efficient bot backend functionality, ensuring smooth user interactions and data handling using Google Cloud.<br> Integrated LangChain to establish secure communication between the bots and the OpenAI API, enabling seamless natural language processing.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023,6,1), to: new Date(2023,6,31) },
		skills: getSkills('ts', 'css'),
		name: 'Generative AI Intern',
		color: 'blue',
		links: [],
		logo: Assets.Copilotify,
		shortDescription: 'Copilotify.app is an innovative technology company that aims to revolutionize the way individuals and businesses work and create through the power of AI copilots.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Lets Grow More',
		description: 'Developed an online calculator, registration form, and to-do list using HTML, CSS, and JavaScript.<br> Effectively utilized front-end technologies to create interactive and user-friendly web applications.',
		contract: ContractType.Internship,
		type: 'Website Development',
		location: 'Remote',
		period: { from: new Date(2022, 2, 1), to: new Date(2022,2,30) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Web Developer Intern',
		color: 'green',
		links: [],
		logo: Assets.WebDev,
		shortDescription: 'LetsGrowMore is an NGO that offers internship opportunities to meritorious college students'
	}
];

export default MY_EXPERIENCES;
