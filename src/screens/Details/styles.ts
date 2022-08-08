import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles(({ colors }) => ({
	container: {
		flex: 1,
		paddingHorizontal: Dimens.PADDING_SCREEN
	},
	categoryContainer: {
		flexDirection: 'row',
		alignItems: 'baseline'
	},
	category: {
		flex: 1,
		marginBottom: 2 * Dimens.SEPARATOR_ITEM,
		fontFamily: FontFamily.MEDIUM,
		color: colors.subtitleColor,
		textAlignVertical: 'center'
	},
	title: {
		fontSize: 20,
		fontFamily: FontFamily.MEDIUM
	},
	authorContainer: {
		flexDirection: 'row',
		marginVertical: 3 * Dimens.SEPARATOR_ITEM
	},
	author: {
		color: colors.grey2
	},
	description: {
		marginBottom: 4 * Dimens.SEPARATOR_ITEM,
		fontFamily: FontFamily.MEDIUM,
		fontSize: 18,
		lineHeight: 24
	},
	content: {
		color: colors.grey2,
		lineHeight: 20
	}
}));
