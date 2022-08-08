import React, { FC, memo } from 'react';

import AnimatedLottieView from 'lottie-react-native';

import { ListSeparator } from '..';
import { useStyles } from './styles';

type Props = {
	isFetching?: boolean;
};

const ListLoading: FC<Props> = ({ isFetching = true }) => {
	const styles = useStyles();

	return (
		<>
			{isFetching && (
				<AnimatedLottieView
					source={require('@app/assets/loading.json')}
					style={styles.anim}
					autoPlay
					loop
				/>
			)}
			<ListSeparator.Edge />
		</>
	);
};

export default memo(
	ListLoading,
	(prevProps, nextProps) => prevProps.isFetching === nextProps.isFetching
);
