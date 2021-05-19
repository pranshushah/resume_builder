export function basicLengthChecker(currentValue: string): boolean {
	if (currentValue.length >= 2) {
		return false;
	} else if (currentValue.length === 0) {
		return false;
	} else {
		return true;
	}
}
