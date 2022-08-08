import * as Cellular from 'expo-cellular';

export const getDefaultCountry = async (): Promise<string> => {
	try {
		return (await Cellular.getIsoCountryCodeAsync()) ?? 'us';
	} catch (err) {
		console.error('Could not determine user country', err);
		return 'us';
	}
};
