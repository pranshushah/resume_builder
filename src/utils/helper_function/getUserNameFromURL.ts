import type { localStoragekey } from '../types';
import { getValueFromLocalStorage } from './getLocalStorage';

export function getUserNameFromURL(key: localStoragekey, defaultVal = ''): string {
	const arr = getValueFromLocalStorage(key, defaultVal).split('/');
	return arr[arr.length - 1];
}
