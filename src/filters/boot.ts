import { BlueBase, BootOptions } from '@bluebase/core';

import { Platform } from 'react-native';
import TagManager from 'react-gtm-module';
import get from 'lodash.get';

export const boot = {
	'bluebase.boot.end': [
		{
			value: (bootOptions: BootOptions, _ctx: {}, BB: BlueBase) => {
				if (Platform.OS === 'web') {
					const tagManagerArgs = {
						auth: get(BB.Configs.get('plugin.gtm.auth'), 'value'),
						gtmId: get(BB.Configs.get('plugin.gtm.id'), 'value'),
						preview: get(BB.Configs.get('plugin.gtm.preview'), 'value'),
					};
					TagManager.initialize(tagManagerArgs);
				}

				return bootOptions;
			},
		},
	],
};
