import { makeStyles } from '@rneui/themed';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles({
	anim: {
		height: Dimens.CARD_HIGHLIGHTS.height,
		aspectRatio: 0.5,
		alignSelf: 'center'
	}
});
