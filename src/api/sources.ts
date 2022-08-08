import { DEFAULT_LANGUAGE } from '@app/data';
import { Source } from '@app/models';
import { getDefaultCountry } from '@app/utils';

import client from './client';

type SourcesParams = {
	country?: string;
	language?: string;
	category: string;
};

export const apiSources = async ({
	country,
	language = DEFAULT_LANGUAGE,
	category
}: SourcesParams): Promise<Source[]> => {
	country = country ?? (await getDefaultCountry());
	const { data } = await client.get('/sources', {
		params: {
			country,
			language,
			category
		}
	});
	return data.sources;
};
