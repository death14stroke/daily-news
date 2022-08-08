import { makeStyles } from '@rneui/themed';
import { EdgeInsets } from 'react-native-safe-area-context';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles(({ colors }, { bottom }: EdgeInsets) => ({
	root: {
		flex: 1,
		paddingBottom: bottom
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		overflow: 'hidden'
	},
	corners: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		borderTopLeftRadius: Dimens.RADIUS_HEADER,
		borderTopRightRadius: Dimens.RADIUS_HEADER,
		height: Dimens.RADIUS_HEADER,
		backgroundColor: colors.background
	},
	image: { flex: 1 }
}));
