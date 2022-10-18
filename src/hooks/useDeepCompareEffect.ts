import isEqual from 'fast-deep-equal';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDeepCompareMemoize = (value: any) => {
	const ref = useRef();
	if (!isEqual(value, ref.current)) {
		ref.current = value;
	}
	return ref.current;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDeepCompareEffect = (callback: () => void, dependencies: any) => {
	useEffect(callback, useDeepCompareMemoize(dependencies));
};
