import React, { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, Text, withTheme } from '@rneui/themed';
import CountryPicker from 'react-native-country-picker-modal';

import { COUNTRY_CODES } from '@app/data';
import { useDefaultCountryMutation, useDefaultCountryQuery } from '@app/hooks/preferences';
import { CountryPickerTheme } from '@app/models';

import { SettingsItem } from '../SettingsItem/SettingsItem';
import { useStyles } from './styles';

export type CountryPickerProps = { pickerTheme?: CountryPickerTheme };

const CountryPreference = withTheme<CountryPickerProps>(({ pickerTheme }) => {
	const styles = useStyles();
	const [visible, setVisible] = useState(false);
	const { data: country } = useDefaultCountryQuery();
	const { mutate: updateCountry } = useDefaultCountryMutation();

	const openModal = () => setVisible(true);
	const closeModal = () => setVisible(false);

	const renderSettingsItem = () => (
		<SettingsItem
			title='Country'
			iconProps={{ type: 'ionicon', name: 'location-outline' }}
			ActionComponent={
				<TouchableOpacity style={styles.action} onPress={openModal}>
					<Text style={styles.country}>{country?.name?.toString() || ''}</Text>
					<Icon size={24} type='feather' name='chevron-right' />
				</TouchableOpacity>
			}
		/>
	);

	return (
		<CountryPicker
			countryCode={country?.cca2 ?? 'IN'}
			key={country?.cca2}
			countryCodes={COUNTRY_CODES}
			visible={visible}
			withFilter
			preferredCountries={country ? [country!.cca2] : []}
			renderFlagButton={renderSettingsItem}
			onClose={closeModal}
			onSelect={updateCountry}
			theme={pickerTheme}
		/>
	);
}, 'CountryPicker');

export default memo(CountryPreference);
