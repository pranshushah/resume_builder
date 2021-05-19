export interface tagElement {
	id: string;
	value: string;
}

export enum selectedDetailEnum {
	SOCIALMEDIA,
	EXPERIENCE,
	SKILLS,
	CERTIFICATE,
	Contact,
	NAMEANDTITLE,
	Education
}

export const urlObj = {
	SOCIALMEDIA: '/resume-details/social-media',
	EXPERIENCE: '/resume-details/experience',
	SKILLS: '/resume-details/skills',
	CERTIFICATE: '/resume-details/certificates',
	CONTACT: '/resume-details/contact',
	NAMEANDTITLE: '/resume-details/name-job',
	EDUCATION: '/resume-details/education',
	PROJECTS: '/resume-details/projects'
};

export type resumeDetailsURL = keyof typeof urlObj;

export const templateURL = {
	template1: '/resume-template/template1',
	template2: '/resume-template/template2',
	template3: '/resume-template/template3',
	template4: '/resume-template/template4',
	template5: '/resume-template/template5',
	template6: '/resume-template/template6'
};

export type templaetURLType = keyof typeof templateURL;

export const localStorageKeyValue = {
	name: 'name',
	personal: 'self',
	education: 'education',
	experience: 'experience',
	certificate: 'certificate',
	jobTitle: 'jobTitle',
	email: 'email',
	phone: 'phone',
	twitter: 'twitter',
	github: 'github',
	linkdin: 'linkdin',
	website: 'personalWebsite',
	blog: 'blog',
	instagram: 'instagram',
	dribble: 'dribble',
	behance: 'behance',
	youtube: 'youtube',
	skills: 'skills',
	facebook: 'facebook',
	address: 'address',
	project: 'project'
};

export type localStoragekey = keyof typeof localStorageKeyValue;

export interface objWithId {
	id: string;
}

export interface education {
	id: string;
	college: string;
	degree?: string;
	major?: string;
	grade?: string;
	present?: boolean;
	startingDate?: string;
	graduationDate?: string;
	moreDetails?: string[];
}

export interface newEducationObj {
	neweducationDetail: education;
}

export interface experience {
	id: string;
	company: string;
	startingDate: string;
	lastDate?: string;
	title: string;
	present?: boolean;
	moreDetails?: string[];
}

export interface newExperienceObj {
	newExperienceDetail: experience;
}

export interface certificate {
	id: string;
	title: string;
	link?: string;
	moreDetails?: string[];
}

export interface newCertificateObj {
	newCertificateDetail: certificate;
}
