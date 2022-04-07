export function getTgUrl(alias?: string) {
	return alias ? 'https://t.me/' + alias : null;
}
