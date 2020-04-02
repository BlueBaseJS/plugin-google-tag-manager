import { BlueBase } from '@bluebase/core';
import Plugin from '../index';
import TagManager from 'react-gtm-module';
jest.mock('react-gtm-module', () => ({
	initialize: jest.fn(),
}));
test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('plugin-google-tag-manager')).toBeTruthy();
});

test('Google Tag Manager Fillter Run', async () => {
	const BB = new BlueBase();
	await BB.boot({
		plugins: [Plugin],
	});
	await BB.Filters.run('bluebase.analytics.track', { name: 'albumVisit' });
	expect(TagManager.initialize).toBeCalled();
});
