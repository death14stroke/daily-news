import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';

import { CACHE_MAX_AGE, CACHE_MAX_STALE } from './Constants';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			networkMode: 'offlineFirst',
			cacheTime: CACHE_MAX_AGE,
			staleTime: CACHE_MAX_STALE
		}
	}
});

export const asyncStoragePersister = createAsyncStoragePersister({
	storage: AsyncStorage
});
