import { analyticsTrack } from './analyticsTrack';
import { boot } from './boot';

export const filters = {
	...analyticsTrack,
	...boot,
};
