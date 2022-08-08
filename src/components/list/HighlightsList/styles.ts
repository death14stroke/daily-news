import { makeStyles } from '@rneui/themed';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles(() => ({
	horizontalList: {
		//marginStart: Dimens.PADDING_SCREEN,
		marginTop: Dimens.PADDING_SCREEN,
		flexGrow: 1
	},
	horizontalSeparator: { margin: Dimens.SEPARATOR_ITEM },
	empty: { height: Dimens.CARD_HIGHLIGHTS.height }
}));
