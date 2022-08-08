import React, { FC } from 'react';
import { View } from 'react-native';

import { Text } from '@rneui/themed';

import { CountryPreference, DarkModePreference } from '@app/components/settings';

import { useStyles } from './styles';

export const SettingsScreen: FC = () => {
	const styles = useStyles();

	return (
		<View style={styles.root}>
			<Text style={styles.preferenceTitle}>Preferences</Text>
			<DarkModePreference />
			<Text style={[styles.preferenceTitle, styles.separator]}>Summary</Text>
			<CountryPreference />
		</View>
	);
};
