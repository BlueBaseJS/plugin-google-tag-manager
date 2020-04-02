import TagManager from 'react-gtm-module';
import { createPlugin } from '@bluebase/core';
import get from 'lodash.get';
export default createPlugin({
	categories: ['analytics'],
	description: 'This plugin allows allows you manage and deploy marketing tags',
	filters: {
		'bluebase.analytics.track': (data, _ctx, BB) => {
			const tagManagerArgs = {
				...data,
				auth: get(BB.Configs.get('plugin.gtm.auth'), 'value'),
				gtmId: get(BB.Configs.get('plugin.gtm.id'), 'value'),
				preview: get(BB.Configs.get('plugin.gtm.preview'), 'value'),
			};

			TagManager.initialize(tagManagerArgs);
		},
	},
	key: 'plugin-google-tag-manager',
	name: 'BlueBase Google Tag Manager',
	version: '1.0.0',
});
