import React from 'react';
export interface IAppContext {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
}

export interface IProps {
	children?: React.ReactNode;
}
