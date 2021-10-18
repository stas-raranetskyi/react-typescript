import { IAction } from 'store/types';

export enum Actions {
	TEST_ACTION = 'TEST_ACTION',
	TEST_ACTION1 = 'TEST_ACTION1',
}

export type TestAction = IAction<string, Actions.TEST_ACTION>;
export type TestAction1 = IAction<boolean, Actions.TEST_ACTION1>;

export type OptionsAction = TestAction | TestAction1;
export interface IState {
	test: string;
	test1: number;
}
