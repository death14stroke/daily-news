import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles(({ colors }) => ({
	action: { flexDirection: 'row', alignItems: 'center' },
	country: {
		fontFamily: FontFamily.LIGHT,
		color: colors.grey3,
		marginEnd: Dimens.PADDING_CONTENT
	}
}));
