import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { apiGetPreferenceTheme } from '@app/api';
import { BookmarkProvider } from '@app/context';
import { asyncStoragePersister, queryClient } from '@app/data';
import { useSystemTheme } from '@app/hooks/themes';
import { stackNavigation } from '@app/navigation';
import { FontFamily } from '@app/styles';

const Screens = () => {
	const [appIsReady, setAppIsReady] = useState(false);
	const { data: scheme } = useQuery(['theme'], apiGetPreferenceTheme);
	const { navTheme, componentsTheme, backgroundColor, barStyle } = useSystemTheme(scheme);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					[FontFamily.LIGHT]: Roboto_300Light,
					[FontFamily.REGULAR]: Roboto_400Regular,
					[FontFamily.MEDIUM]: Roboto_500Medium
				});
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	useEffect(() => {
		async function hide() {
			await SplashScreen.hideAsync();
		}

		if (appIsReady) {
			hide();
		}
	}, [appIsReady]);

	useEffect(() => {
		async function navBarSetup() {
			try {
				if (Platform.OS === 'android') {
					await NavigationBar.setBackgroundColorAsync(backgroundColor);
					await NavigationBar.setButtonStyleAsync(barStyle);
				}
			} catch (err) {
				console.error('navbar', err);
			}
		}

		if (appIsReady) {
			navBarSetup();
		}
	}, [backgroundColor, barStyle, appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<ThemeProvider theme={componentsTheme}>
			<NavigationContainer theme={navTheme}>
				<StatusBar translucent backgroundColor={backgroundColor} style={barStyle} />
				{stackNavigation()}
			</NavigationContainer>
		</ThemeProvider>
	);
};

persistQueryClient({
	queryClient,
	persister: asyncStoragePersister
});

SplashScreen.preventAutoHideAsync();

export default function App() {
	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<BookmarkProvider>
					<Screens />
				</BookmarkProvider>
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}
