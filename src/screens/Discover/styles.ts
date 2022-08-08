import { makeStyles } from '@rneui/themed';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles(() => ({
	empty: { height: Dimens.CARD_SOURCES.height },
	categorySourceList: {
		flexGrow: 1,
		marginBottom: Dimens.SEPARATOR_ITEM
	},
	source: {
		width: Dimens.CARD_SOURCES.width
	}
}));
