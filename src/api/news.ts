import { DEFAULT_LANGUAGE, PAGE_SIZE } from '@app/data';
import { News } from '@app/models';
import { getDefaultCountry } from '@app/utils';

import client from './client';

type HighlightsParams = {
	country?: string;
	page: number;
	category?: string;
};

type SearchParams = {
	query: string;
	language?: string;
	page: number;
};

export const apiRecents = async (country?: string): Promise<News[]> => {
	country = country ?? (await getDefaultCountry());
	const { data } = await client.get('/recents', {
		params: { country }
	});
	return data.recents;
};

export const apiHighlights = async ({
	country,
	page,
	category
}: HighlightsParams): Promise<News[]> => {
	country = country ?? (await getDefaultCountry());
	const { data } = await client.get('/highlights', {
		params: {
			country,
			category,
			page,
			pageSize: PAGE_SIZE
		}
	});
	return data.articles;
};

export const apiSearch = async (
	{ query, language = DEFAULT_LANGUAGE, page }: SearchParams,
	signal?: AbortSignal
): Promise<News[]> => {
	const { data } = await client.get('/search', {
		params: {
			query,
			language,
			page,
			pageSize: PAGE_SIZE
		},
		signal
	});
	return data.articles;
};
