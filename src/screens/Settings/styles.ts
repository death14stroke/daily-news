import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles(({ colors }) => ({
	root: { padding: Dimens.PADDING_SCREEN },
	preferenceTitle: {
		color: colors.grey1,
		fontFamily: FontFamily.REGULAR,
		marginBottom: 2 * Dimens.SEPARATOR_ITEM,
		fontSize: 20
	},
	separator: {
		marginTop: 3 * Dimens.PADDING_CONTENT
	}
}));
