import type { localStoragekey } from '../types';

export function getValueFromLocalStorage<T>(key: localStoragekey, initialValue: T): T {
	const localValue = window.localStorage.getItem(key);
	return localValue !== null ? (JSON.parse(localValue) as T) : initialValue;
}
