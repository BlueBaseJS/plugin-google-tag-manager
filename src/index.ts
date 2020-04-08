import { createPlugin } from '@bluebase/core';
import { filters } from './filters';

export default createPlugin({
	categories: ['analytics'],
	description: 'This plugin allows allows you manage and deploy marketing tags',
	filters,
	key: 'plugin-google-tag-manager',
	name: 'BlueBase Google Tag Manager',
	version: '1.0.0',
});
