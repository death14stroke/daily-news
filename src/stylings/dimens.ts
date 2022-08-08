import { StatusBar } from 'react-native';

import { ms } from 'react-native-size-matters';

export const Dimens = {
	STATUSBAR_HEIGHT: StatusBar.currentHeight ?? 32,
	PADDING_SCREEN: 12,
	PADDING_CONTENT: 12,
	RADIUS_CARD: 8,
	RADIUS_HEADER: 24,
	SEPARATOR_ITEM: 8,
	AVATAR_MEDIUM: 50,
	CARD_HIGHLIGHTS: {
		height: ms(180),
		width: ms(272)
	},
	CARD_RECENTS: {
		height: ms(140)
	},
	CARD_SOURCES: {
		height: ms(120),
		width: ms(268)
	}
};
