export type ProjectInfo = {
	name: string;
	description: string;

	sourceUrl: string;

	/**
	 * We assume that if an image path is not specified, it will have its image in
	 * the following path: `/assets/toLower($name).webp`.
	 */
	imagePath?: string;
	projectUrl?: string;
};
