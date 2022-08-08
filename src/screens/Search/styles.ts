import { makeStyles } from '@rneui/themed';
import { EdgeInsets } from 'react-native-safe-area-context';

import { Dimens } from '@app/styles';

export const useStyles = makeStyles(({ colors }, { bottom }: EdgeInsets) => ({
	root: {
		marginTop: Dimens.PADDING_SCREEN,
		marginBottom: bottom
	},
	headerContainerStyle: {
		flexGrow: 1,
		flexDirection: 'row',
		paddingTop: Dimens.STATUSBAR_HEIGHT,
		backgroundColor: colors.background
	},
	searchContainer: { flex: 1 },
	upArrowStyle: {
		alignSelf: 'center',
		marginStart: Dimens.PADDING_SCREEN
	}
}));
