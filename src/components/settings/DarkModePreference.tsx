import React, { FC, memo } from 'react';

import { Switch } from '@rneui/themed';

import { useThemeMutation, useThemeQuery } from '@app/hooks/preferences';

import { SettingsItem } from './SettingsItem/SettingsItem';

const DarkModePreference: FC = () => {
	const { data: scheme } = useThemeQuery();
	const { mutate: updateScheme } = useThemeMutation();

	return (
		<SettingsItem
			iconProps={{ type: 'ionicon', name: 'moon-outline' }}
			title='Dark mode'
			ActionComponent={
				<Switch
					value={scheme === 'dark'}
					onValueChange={dark => updateScheme(dark ? 'dark' : 'light')}
				/>
			}
		/>
	);
};

export default memo(DarkModePreference);
