export function mobileNumberChecker(phoneNumber: string): boolean {
	if (phoneNumber.length === 0) {
		return false;
	}
	const re = phoneNumber.match(/^[0-9]{10}$/);
	if (re == null) return true;
	else return false;
}
