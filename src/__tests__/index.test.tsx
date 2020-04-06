import { BlueBase } from '@bluebase/core';
import Plugin from '../index';
import TagManager from 'react-gtm-module';
jest.mock('react-gtm-module', () => ({
	initialize: jest.fn(),
	dataLayer: jest.fn(),
}));
test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('plugin-google-tag-manager')).toBeTruthy();
});

test('Google Tag Manager Fillter Run but not Initialize Called on Native', async () => {
	const BB = new BlueBase();
	await BB.boot({
		plugins: [Plugin],
	});
	await BB.Filters.run('bluebase.analytics.track', { name: 'albumVisit' });
	expect(TagManager.initialize).toBeCalledTimes(0);
});

test('Google Tag Manager Fillter Run and Initialize Called on web', async () => {
	jest.mock('Platform', () => {
		const Platform = require.requireActual('Platform');
		Platform.OS = 'web';
		return Platform;
	});
	const BB = new BlueBase();
	await BB.boot({
		plugins: [Plugin],
	});
	await BB.Filters.run('bluebase.analytics.track', null);
	expect(TagManager.initialize).toBeCalled();
});
test('Google Tag Manager Fillter Run and datalayer Called on web', async () => {
	jest.mock('Platform', () => {
		const Platform = require.requireActual('Platform');
		Platform.OS = 'web';
		return Platform;
	});
	const BB = new BlueBase();
	await BB.boot({
		plugins: [Plugin],
	});
	await BB.Filters.run('bluebase.analytics.track', { name: 'albumVisit' });
	expect(TagManager.dataLayer).toBeCalled();
});
