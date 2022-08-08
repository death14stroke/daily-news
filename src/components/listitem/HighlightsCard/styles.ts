import { makeStyles } from '@rneui/themed';

import { Colors, Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles(() => ({
	image: {
		resizeMode: 'cover',
		borderRadius: Dimens.RADIUS_CARD,
		opacity: 0.6
	},
	imageContainer: {
		...Dimens.CARD_HIGHLIGHTS,
		backgroundColor: Colors.black,
		borderRadius: Dimens.RADIUS_CARD
	},
	textContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		overflow: 'hidden',
		borderRadius: Dimens.RADIUS_CARD
	},
	title: {
		color: Colors.white,
		padding: Dimens.PADDING_CONTENT,
		fontSize: 16,
		fontFamily: FontFamily.MEDIUM
	},
	date: {
		color: Colors.white,
		padding: Dimens.PADDING_CONTENT,
		fontSize: 14,
		marginBottom: Dimens.PADDING_CONTENT
	}
}));
