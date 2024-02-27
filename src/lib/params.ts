import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Aarushi',
	lastName: '',
	description:
		'A pre-final year AI/ML enthusiast with a strong focus on leveraging diverse frameworks to craft impactful solutions. With a track record of excellence in academia and a passion for ML, I am poised to tackle complex challenges and drive innovation.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/aarushiksk' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/aarushi-1b24211a9/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/aarushiksk'
		},
		
		{
			platform: Platform.Email,
			link: 'aarushiksk@gmail.com'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com/@aarushi740'
		}
		
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/1r4DBYLbVam58eq7Hl3IQ-HpFUIcn8cxN/view?usp=drive_link'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
