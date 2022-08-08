import { ColorSchemeName } from 'react-native';

import { AppTheme } from '@app/models';
import {
	DayComponentsTheme,
	NavDarkTheme,
	NavDefaultTheme,
	NightComponentsTheme
} from '@app/styles';
export const useSystemTheme = (scheme: ColorSchemeName): AppTheme => {
	if (scheme === 'light') {
		return {
			navTheme: NavDefaultTheme,
			componentsTheme: DayComponentsTheme,
			barStyle: 'dark',
			backgroundColor: NavDefaultTheme.colors.card
		};
	} else {
		return {
			navTheme: NavDarkTheme,
			componentsTheme: NightComponentsTheme,
			barStyle: 'light',
			backgroundColor: NavDarkTheme.colors.card
		};
	}
};
