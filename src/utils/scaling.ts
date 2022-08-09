import { ms } from 'react-native-size-matters';

import { FONT_SCALE_FACTOR } from '@app/data';

export const fs = (fontSize: number) => ms(fontSize, FONT_SCALE_FACTOR);
