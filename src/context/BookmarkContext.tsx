import React, {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	useEffect,
	useReducer
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

import { News } from '@app/models';

interface Action {
	type: 'init_bookmarks' | 'add_bookmark' | 'delete_bookmark';
	payload: any;
}

type State = News[];

type ContextValue = {
	state: State;
	addBookmark: ReturnType<typeof addBookmark>;
	deleteBookmark: ReturnType<typeof deleteBookmark>;
	isBookmarked: (news: News) => boolean;
};

const bookmarkReducer = (state: News[], action: Action) => {
	switch (action.type) {
		case 'init_bookmarks':
			return action.payload;
		case 'add_bookmark':
			return _.unionBy(state, [action.payload], (news: News) => news.url);
		case 'delete_bookmark':
			return _.filter(state, news => news.url !== action.payload.url);
		default:
			return state;
	}
};

const addBookmark = (dispatch: Dispatch<Action>) => (news: News) => {
	dispatch({ type: 'add_bookmark', payload: news });
};

const deleteBookmark = (dispatch: Dispatch<Action>) => (news: News) => {
	dispatch({ type: 'delete_bookmark', payload: news });
};

const INITIAL_STATE: State = [];

const Context = createContext<ContextValue>(undefined!);

const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(bookmarkReducer, INITIAL_STATE);

	const isBookmarked = (news: News): boolean => {
		return _.find(state, (n: News) => n.url === news.url) !== undefined;
	};

	useEffect(() => {
		const fetchBookmarks = async () => {
			try {
				const bookmarks = await AsyncStorage.getItem('bookmarks');
				if (bookmarks) {
					dispatch({
						type: 'init_bookmarks',
						payload: JSON.parse(bookmarks)
					});
				}
			} catch (err) {
				console.error('Fetch bookmarks error', err);
			}
		};

		fetchBookmarks();
	}, []);

	useEffect(() => {
		const syncStorage = async () => {
			try {
				await AsyncStorage.setItem('bookmarks', JSON.stringify(state));
			} catch (err) {
				console.error('Failed bookmarks sync-up', err);
			}
		};

		syncStorage();
	}, [state]);

	return (
		<Context.Provider
			value={{
				state,
				addBookmark: addBookmark(dispatch),
				deleteBookmark: deleteBookmark(dispatch),
				isBookmarked
			}}>
			{children}
		</Context.Provider>
	);
};

export { Context as BookmarkContext, Provider as BookmarkProvider };
