import isEqual from 'fast-deep-equal';
import { useEffect, useRef } from 'react';

const useDeepCompareMemoize = (value: any) => {
	const ref = useRef();
	if (!isEqual(value, ref.current)) {
		ref.current = value;
	}
	return ref.current;
};

export const useDeepCompareEffect = (callback: () => void, dependencies: any) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(callback, useDeepCompareMemoize(dependencies));
};
