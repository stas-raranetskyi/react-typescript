import React, { useMemo } from 'react';

export const useMediaQuery = (queryInput: string): boolean => {

	const query = queryInput.replace(/^@media( ?)/m, '');
	const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
	const matchMedia = useMemo(() => supportMatchMedia ? window.matchMedia : () => ({ matches: false } as MediaQueryList), [supportMatchMedia]);

	const [match, setMatch] = React.useState<boolean>(() => {
		if (supportMatchMedia) {
			return matchMedia(query).matches;
		}

		return false;
	});

	React.useEffect(() => {
		let active = true;
		if (!supportMatchMedia) {
			return undefined;
		}
		const queryList: MediaQueryList = matchMedia(query);
		const updateMatch = () => {
			if (active) {
				setMatch(queryList.matches);
			}
		};
		updateMatch();
		queryList.addListener(updateMatch);
		return () => {
			active = false;
			queryList.removeListener(updateMatch);
		};
	}, [query, matchMedia, supportMatchMedia]);

	return match;
};
