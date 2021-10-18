import { breakPoints } from 'const';

import { useMediaQuery } from './useMediaQuery';

const useDeviceType = () => {
	const isMobile = useMediaQuery(`(max-width: ${breakPoints.MOBILE}px)`);

	const isTablet = useMediaQuery(`(max-width: ${breakPoints.TABLET}px) and (min-width: ${breakPoints.MOBILE + 1}px)`);

	const isDesktop = !isMobile && !isTablet;

	return {
		isMobile,
		isTablet,
		isDesktop,
	};
};

export default useDeviceType;
