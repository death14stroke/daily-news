import { useQueries, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { apiSources } from '@app/api';
import { CATEGORIES } from '@app/data';
import { Source } from '@app/models';

export const useSourcesQuery = (category: string) =>
	useQuery(['sources', category], () => apiSources({ category }));

export const useMultipleSourceQueries = () => {
	const queries: UseQueryOptions<Source[]>[] = CATEGORIES.map(category => ({
		queryKey: ['sources', category],
		queryFn: () => apiSources({ category })
	}));

	return useQueries({ queries });
};
