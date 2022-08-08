import { makeStyles } from '@rneui/themed';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles(() => ({
	recentsList: {
		paddingHorizontal: Dimens.PADDING_SCREEN
	},
	itemSeparator: {
		margin: Dimens.SEPARATOR_ITEM
	}
}));
