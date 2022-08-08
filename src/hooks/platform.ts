import { Platform } from 'react-native';

export const usePlatformForSearchBar = () => {
	switch (Platform.OS) {
		case 'android':
			return 'android';
		case 'ios':
			return 'ios';
		default:
			return 'default';
	}
};
