import { Source } from './Source';

export interface News {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
	category?: string;
}
