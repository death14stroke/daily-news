import { makeStyles } from '@rneui/themed';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles(({ colors }) => ({
	iconContainer: {
		borderRadius: 4,
		borderColor: colors.grey5,
		borderWidth: 1,
		padding: Dimens.SEPARATOR_ITEM
	}
}));
