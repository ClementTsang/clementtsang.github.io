export type ExperienceLink = {
	name: string;
	url: string;
};

export type Experience = {
	name: string;
	dates: string[];
	location?: string;
	link?: ExperienceLink;
	position: string;
	description: string;
};
