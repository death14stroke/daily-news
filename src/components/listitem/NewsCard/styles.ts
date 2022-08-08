import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles(({ colors }) => ({
	cardContainer: {
		height: Dimens.CARD_RECENTS.height,
		marginHorizontal: Dimens.PADDING_SCREEN
	},
	innerCardContainer: { flexDirection: 'row' },
	imageContainer: {
		aspectRatio: 1,
		height: '100%'
	},
	image: {
		height: '100%',
		borderTopLeftRadius: Dimens.RADIUS_CARD,
		borderBottomLeftRadius: Dimens.RADIUS_CARD
	},
	textContainer: {
		flex: 3,
		padding: Dimens.PADDING_CONTENT,
		justifyContent: 'center'
	},
	category: {
		position: 'absolute',
		top: Dimens.PADDING_CONTENT,
		start: Dimens.PADDING_CONTENT,
		fontFamily: FontFamily.MEDIUM,
		color: colors.subtitleColor
	},
	title: {
		fontSize: 16,
		fontFamily: FontFamily.MEDIUM
	}
}));
