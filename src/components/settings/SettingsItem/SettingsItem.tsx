import React, { FC, ReactNode } from 'react';

import { Icon, IconProps, ListItem } from '@rneui/themed';

import { useStyles } from './styles';

interface Props {
	iconProps: Partial<IconProps> & {
		name: string;
		type: string;
	};
	title: string;
	ActionComponent?: ReactNode;
}

export const SettingsItem: FC<Props> = ({ iconProps, title, ActionComponent }) => {
	const styles = useStyles();

	return (
		<ListItem>
			<Icon size={24} containerStyle={styles.iconContainer} {...iconProps} />
			<ListItem.Content>
				<ListItem.Title>{title}</ListItem.Title>
			</ListItem.Content>
			{ActionComponent}
		</ListItem>
	);
};
