import { FilterNestedCollection } from '@bluebase/core';
import { Platform } from 'react-native';
import TagManager from 'react-gtm-module';
export const analyticsTrack: FilterNestedCollection = {
	'bluebase.analytics.track': (dataLayer, _ctx) => {
		if (Platform.OS === 'web') {
			const tagManagerArgs = {
				dataLayer,
			};
			TagManager.dataLayer(tagManagerArgs);
		}
	},
};
