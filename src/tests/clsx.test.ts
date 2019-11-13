import clsx from 'helpers/clsx';

describe('Class names', () => {
	test('Simple', () => {
		expect(clsx('classname')).toBe('classname');
		expect(clsx('classname', 'classname1')).toBe('classname classname1');
		expect(clsx('classname', 'classname1', 'classname2')).toBe('classname classname1 classname2');
	});

	test('With condition', () => {
		expect(clsx({ classname: false })).toBe('');
		expect(clsx({ classname: true })).toBe('classname');
		expect(clsx('classname1', { classname: true })).toBe('classname1 classname');
		expect(clsx('classname1', { classname: false })).toBe('classname1');
	});
});
