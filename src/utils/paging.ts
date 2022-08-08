import { GetNextPageParamFunction } from '@tanstack/react-query';

import { PAGE_SIZE } from '@app/data';
import { News } from '@app/models';

export const getNextPageParam: GetNextPageParamFunction<News[]> = (lastPage, pages) =>
	lastPage.length === PAGE_SIZE ? pages.length + 1 : undefined;
