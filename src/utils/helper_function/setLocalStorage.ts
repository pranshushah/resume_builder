import type { localStoragekey } from '../types';

/**
 * @description sets the value to the local storage in JSON.stringify() MODE.
 * @param key  key of local storage
 * @param value
 */
export function setValueToLocalStorage<T>(key: localStoragekey, value: T): void {
	window.localStorage.setItem(key, JSON.stringify(value));
}
