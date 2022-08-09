import { Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { createTheme } from '@rneui/themed';
import { DARK_THEME, DEFAULT_THEME } from 'react-native-country-picker-modal';

import { fs } from '@app/utils';

import { Colors } from './colors';
import { Dimens } from './dimens';
import { FontFamily } from './typography';

export const NavDefaultTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.bayOfMany,
		background: DefaultTheme.colors.card
	}
};

export const NavDarkTheme: Theme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: Colors.cinnabar,
		background: DarkTheme.colors.card
	}
};

const cardContainerStyle: StyleProp<ViewStyle> = {
	borderRadius: Dimens.RADIUS_CARD,
	elevation: 4,
	shadowRadius: 4,
	shadowOffset: { height: 4, width: 4 },
	shadowOpacity: 0.8,
	padding: 0,
	margin: 0,
	borderWidth: 0
};

const sectionTitleStyle: StyleProp<TextStyle> = {
	fontFamily: FontFamily.REGULAR,
	marginStart: Dimens.PADDING_SCREEN,
	marginVertical: 2 * Dimens.PADDING_SCREEN
};

const listContainerStyle: StyleProp<ViewStyle> = {
	padding: 0
};

const listTitleStyle: StyleProp<TextStyle> = {
	fontFamily: FontFamily.REGULAR,
	fontSize: fs(16)
};

const BaseComponentsTheme = createTheme({
	lightColors: {
		...NavDefaultTheme.colors,
		subtitleColor: Colors.cinnabar
	},
	darkColors: {
		...NavDarkTheme.colors,
		subtitleColor: 'gray'
	}
});

export const DayComponentsTheme = createTheme({
	...BaseComponentsTheme,
	mode: 'light',
	components: {
		Card: {
			containerStyle: {
				...cardContainerStyle,
				backgroundColor: Colors.zircon,
				shadowColor: BaseComponentsTheme.lightColors?.grey4
			}
		},
		SearchBar: {
			containerStyle: {
				backgroundColor: BaseComponentsTheme.lightColors?.background
			},
			inputStyle: {
				color: BaseComponentsTheme.lightColors?.grey0
			}
		},
		Text: {
			style: { fontFamily: FontFamily.REGULAR },
			h4Style: {
				...sectionTitleStyle,
				color: BaseComponentsTheme.lightColors?.grey1
			}
		},
		ListItem: {
			containerStyle: {
				...listContainerStyle,
				backgroundColor: BaseComponentsTheme.lightColors?.background
			}
		},
		ListItemTitle: {
			style: {
				...listTitleStyle,
				color: BaseComponentsTheme.lightColors?.grey1
			}
		},
		CountryPicker: {
			pickerTheme: {
				...DEFAULT_THEME,
				backgroundColor: BaseComponentsTheme.lightColors?.background!
			}
		},
		Switch: {
			...Platform.select({
				android: {
					trackColor: {
						false: BaseComponentsTheme.lightColors?.grey4
					}
				}
			})
		}
	},
	lottieResources: {
		empty: require('@app/assets/empty.json'),
		loading: require('@app/assets/loading.json')
	}
});

export const NightComponentsTheme = createTheme({
	...BaseComponentsTheme,
	mode: 'dark',
	components: {
		Card: {
			containerStyle: {
				...cardContainerStyle,
				backgroundColor: Colors.shark,
				shadowColor: BaseComponentsTheme.darkColors?.grey4
			}
		},
		SearchBar: {
			containerStyle: {
				backgroundColor: BaseComponentsTheme.darkColors?.background
			},
			inputStyle: {
				color: BaseComponentsTheme.darkColors?.grey0
			}
		},
		SkeletonPlaceHolder: {
			backgroundColor: BaseComponentsTheme.darkColors?.grey5,
			highlightColor: BaseComponentsTheme.darkColors?.grey4
		},
		Text: {
			style: { fontFamily: FontFamily.REGULAR },
			h4Style: {
				...sectionTitleStyle,
				color: BaseComponentsTheme.darkColors?.grey1
			}
		},
		ListItem: {
			containerStyle: {
				...listContainerStyle,
				backgroundColor: BaseComponentsTheme.darkColors?.background
			}
		},
		ListItemTitle: {
			style: {
				...listTitleStyle,
				color: BaseComponentsTheme.darkColors?.grey1
			}
		},
		CountryPicker: {
			pickerTheme: {
				...DARK_THEME,
				backgroundColor: BaseComponentsTheme.darkColors?.background!
			}
		},
		Switch: {
			...Platform.select({
				android: {
					trackColor: {
						true: BaseComponentsTheme.darkColors?.grey4
					}
				}
			})
		}
	},
	lottieResources: {
		empty: require('@app/assets/empty-dark.json'),
		loading: require('@app/assets/loading-dark.json')
	}
});
