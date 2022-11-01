type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export interface BlogPost {
	title: string;
	client: string;
	description: string;
	publishDate: string;
	tags: string[];
	bgcolor: RGB | RGBA | HEX;
	textcolor: RGB | RGBA | HEX;
	draft: boolean;
}
