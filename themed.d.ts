import '@rneui/themed';
import { SkeletonPlaceholderProps } from '@app/components/loader';
import { CountryPickerProps } from '@app/components/settings';

declare module '@rneui/themed' {
	export interface Colors {
		subtitleColor: string;
	}

	export interface Theme {
		lottieResources: {
			empty: any;
			loading: any;
		};
	}

	export interface ComponentTheme {
		SkeletonPlaceHolder: Partial<SkeletonPlaceholderProps>;
		CountryPicker: CountryPickerProps;
	}
}
