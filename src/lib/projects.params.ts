import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Engineered a precise ML model, achieving an impressive 98.58% accuracy in recognizing handwritten alphabetic characters.<br> Deployed the model on Google Cloud Platform (GCP) for scalable performance.<br> Developed a sleek user interface using Flask, CSS3, and JavaScript, ensuring a user-friendly interaction.',
		shortDescription:
			'The alphabet recognizer project is a web application, the project harnesses the power of Deep Learning to recognize input block letters.',
		links: [{ to: 'https://github.com/aarushiksk/Alphabet-Recogniser', label: 'GitHub' }],
		logo: Assets.drawing,
		name: 'Alphabet Recognizer',
		period: {
			from: new Date(2023, 8, 5)
		},
	skills: getSkills('ts', 'js', 'cloud','Flask'),
		type: 'Deep Learning',
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'Achieved exceptional accuracy by employing advanced techniques, showcasing expertise in facial feature extraction and recognition.<br> Designed an accessible interface for effortless navigation, combining technical prowess with user-centric design principles by using front end technologies along with Flask.',
		shortDescription:
			'Developed and refined ML algorithms for accurate facial recognition across diverse conditions, surpassing industry benchmarks.',
		links: [{ to: 'https://github.com/aarushiksk/Face-Recognition-Attendance-System', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Facial Recognition Attendance System',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Deep Leanring',
		
		
	}
];

export default MY_PROJECTS;
