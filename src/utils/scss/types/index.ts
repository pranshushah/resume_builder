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
  Education,
}

export const localStorageKeyValue = {
  name: 'name',
  education: 'education',
  jobTitle: 'jobTitle',
  email: 'email',
  phone: 'phone',
  twitter: 'twitter',
  github: 'github',
  linkdin: 'linkdin',
  personalWebsite: 'personalWebsite',
  blog: 'blog',
  instagram: 'instagram',
  dribble: 'dribble',
  behance: 'behance',
  youtube: 'youtube',
  skills: 'skills',
};

export type localStoragekey = keyof typeof localStorageKeyValue;
