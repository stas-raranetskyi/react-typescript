import useDeviceType from 'hooks/useDeviceType';
import React, { useContext } from 'react';
import { IAppContext } from './types';

export const AppContext: any = React.createContext({});
export const useAppContext = () => useContext<IAppContext>(AppContext);

const Provider: React.FC = ({ children }) => {
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
