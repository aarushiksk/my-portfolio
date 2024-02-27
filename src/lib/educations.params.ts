import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor degree of Technology in Computer Science and Engineering',
		description: 'SGPA : 8.86 till 5th Semester',
		location: 'Lucknow, India',
		logo: Assets.bbditm,
		name: 'Babu Banarasi Das Institute of Technology and Management',
		organization: 'Babu Banarasi Das Institute of Technology and Management, AKTU',
		period: { from: new Date(2021, 9, 1), to: new Date() },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Data Structures', 'Python', 'Database management', 'Java', 'Operating System']
	},
	{
		degree: 'Intermediate',
		description: '',
		location: 'Lucnkow, India',
		logo: Assets.RLB,
		name: 'Rani Laxmi Bai Memorial School',
		organization: 'Rani Laxmi Bai Memorial School, CBSE',
		period: { from: new Date(2019, 0, 1), to: new Date(2021,11,1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Physics', 'Chemistry', 'Maths', 'Computer Science']
	}
];
