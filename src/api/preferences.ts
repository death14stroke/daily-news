import { ColorSchemeName } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Country, CountryCode, FlagType, getAllCountries } from 'react-native-country-picker-modal';

import { Scheme } from '@app/models';

const getCountry = async (countryCode: CountryCode) =>
	(await getAllCountries(FlagType.FLAT, undefined, undefined, undefined, [countryCode]))[0];

export const apiGetPreferenceTheme = async (): Promise<Scheme> => {
	try {
		const scheme = ((await AsyncStorage.getItem('theme')) as ColorSchemeName) ?? 'light';
		return scheme;
	} catch (err) {
		console.error('Could not fetch theme:', err);
		return 'light';
	}
};

export const apiUpdatePreferenceTheme = async (scheme: Scheme) => {
	try {
		await AsyncStorage.setItem('theme', scheme);
		console.info('Updated theme to', scheme);
	} catch (err) {
		console.error('Could not update theme:', err);
	}
};

export const apiGetPreferenceCountry = async (): Promise<Country> => {
	try {
		const countryString = await AsyncStorage.getItem('country');
		if (countryString) {
			return JSON.parse(countryString) as Country;
		}
		return await getCountry('IN');
	} catch (err) {
		console.error('Could not fetch country:', err);
		return await getCountry('IN');
	}
};

export const apiUpdatePreferenceCountry = async (country: Country) => {
	try {
		await AsyncStorage.setItem('country', JSON.stringify(country));
		console.info('Updated country to', country.name);
	} catch (err) {
		console.error('Could not update country:', err);
	}
};
