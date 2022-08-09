import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';
import { fs } from '@app/utils';

export const useStyles = makeStyles(({ colors }) => ({
	root: { padding: Dimens.PADDING_SCREEN },
	preferenceTitle: {
		color: colors.grey1,
		fontFamily: FontFamily.REGULAR,
		marginBottom: 2 * Dimens.SEPARATOR_ITEM,
		fontSize: fs(20)
	},
	separator: {
		marginTop: 3 * Dimens.PADDING_CONTENT
	}
}));
