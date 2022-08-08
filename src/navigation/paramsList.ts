import { News } from '@app/models';

export type RootStackParamList = {
	Root: undefined;
	Details: News;
	Search: undefined;
	WebView: undefined;
};

export type BottomTabParamList = {
	Home: undefined;
	Discover: undefined;
	Bookmarks: undefined;
	Settings: undefined;
};

export type TopTabParamList = {
	All: undefined;
	Business: undefined;
	Entertainment: undefined;
	General: undefined;
	Health: undefined;
	Science: undefined;
	Sports: undefined;
	Technology: undefined;
};
