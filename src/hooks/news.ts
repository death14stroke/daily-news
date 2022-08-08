import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { apiHighlights, apiRecents, apiSearch } from '@app/api';
import { DEFAULT_PAGE } from '@app/data';
import { getNextPageParam } from '@app/utils';

import { useDefaultCountryQuery } from './preferences';

export const useHighlightsQuery = (category?: string) => {
	const { data: country } = useDefaultCountryQuery();

	return useInfiniteQuery(
		['highlights', category, country?.cca2],
		({ pageParam = DEFAULT_PAGE }) =>
			apiHighlights({ page: pageParam, category, country: country?.cca2.toLowerCase() }),
		{ getNextPageParam, enabled: !!country }
	);
};

export const useRecentsQuery = () => {
	const { data: country } = useDefaultCountryQuery();

	return useQuery(['recents', country?.cca2], () => apiRecents(country?.cca2.toLowerCase()), {
		enabled: !!country
	});
};

export const useSearchQuery = (query: string) =>
	useInfiniteQuery(
		['search', query],
		({ pageParam = DEFAULT_PAGE }) => apiSearch({ query, page: pageParam }),
		{ getNextPageParam, enabled: false }
	);
