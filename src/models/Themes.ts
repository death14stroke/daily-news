import { Theme } from '@react-navigation/native';
import { CreateThemeOptions } from '@rneui/themed';

export interface AppTheme {
	navTheme: Theme;
	componentsTheme: CreateThemeOptions;
	barStyle: Scheme;
	backgroundColor: string;
}

export type Scheme = 'dark' | 'light';

export interface CountryPickerTheme {
	primaryColor: string;
	primaryColorVariant: string;
	backgroundColor: string;
	onBackgroundTextColor: string;
	fontSize: number;
	fontFamily: string;
	filterPlaceholderTextColor: string;
	activeOpacity: number;
	itemHeight: number;
	flagSize: number;
	flagSizeButton: number;
}
