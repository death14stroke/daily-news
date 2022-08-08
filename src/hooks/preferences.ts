import { useTheme } from '@rneui/themed';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Country } from 'react-native-country-picker-modal';

import {
	apiGetPreferenceCountry,
	apiGetPreferenceTheme,
	apiUpdatePreferenceCountry,
	apiUpdatePreferenceTheme
} from '@app/api';
import { Scheme } from '@app/models';
import { DayComponentsTheme, NightComponentsTheme } from '@app/styles';

export const useThemeQuery = () => useQuery(['theme'], apiGetPreferenceTheme);

export const useThemeMutation = () => {
	const { updateTheme } = useTheme();
	const queryClient = useQueryClient();

	return useMutation<void, unknown, Scheme>(apiUpdatePreferenceTheme, {
		onSuccess: (_, scheme) => {
			updateTheme(scheme === 'dark' ? NightComponentsTheme : DayComponentsTheme);
			queryClient.setQueryData(['theme'], () => scheme);
		},
		onError: err => {
			console.error('Theme mutation fail', err);
		}
	});
};

export const useDefaultCountryQuery = () => useQuery(['country'], apiGetPreferenceCountry);

export const useDefaultCountryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation<void, unknown, Country>(apiUpdatePreferenceCountry, {
		onSuccess: (_, country) => {
			queryClient.setQueryData(['country'], () => country);
		},
		onError: err => {
			console.error('Country mutation fail', err);
		}
	});
};
