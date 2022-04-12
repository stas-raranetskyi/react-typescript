import useDeviceType from 'hooks/useDeviceType';
import React, { useContext } from 'react';

import { IAppContext, IProps } from './types';

export const AppContext: any = React.createContext({});
export const useAppContext = () => useContext<IAppContext>(AppContext);

const Provider: React.FC<IProps> = ({ children }) => {
	const { isMobile, isTablet, isDesktop } = useDeviceType();

	return (
		<AppContext.Provider value={{
			isMobile,
			isTablet,
			isDesktop,
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default Provider;
