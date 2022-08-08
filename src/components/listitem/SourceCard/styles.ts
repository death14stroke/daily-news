import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles(({ colors }) => ({
	cardContainer: {
		height: Dimens.CARD_SOURCES.height,
		padding: Dimens.PADDING_CONTENT
	},
	innerContainer: {
		flexDirection: 'row',
		height: '100%'
	},
	imageContainer: {
		justifyContent: 'center'
	},
	textContainer: {
		paddingStart: Dimens.PADDING_CONTENT,
		flex: 6,
		justifyContent: 'center'
	},
	avatar: { backgroundColor: colors.grey4 },
	name: {
		position: 'absolute',
		top: 0,
		start: Dimens.PADDING_CONTENT,
		fontFamily: FontFamily.MEDIUM,
		fontSize: 16,
		color: colors.subtitleColor
	},
	description: {
		fontSize: 14,
		textAlignVertical: 'center'
	}
}));
