import { makeStyles } from '@rneui/themed';

import { Dimens, FontFamily } from '@app/styles';

export const useStyles = makeStyles((_, fontSize: number) => ({
	container: { width: '100%' },
	animation: { height: '100%' },
	animationContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: Dimens.SEPARATOR_ITEM
	},
	label: {
		fontSize,
		textAlign: 'center',
		fontFamily: FontFamily.LIGHT
	}
}));
