import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { fetchUsers } from 'store/reducers/users/actions';

const Users: React.FC = () => {
	const { users, loading } = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			{loading ? 'Loading users...' : (
				<>
					Users:
					{users.map(({id, name}) => <div key={id}>{name}</div>)}
				</>
			)}
		</div>
	);
};

export default Users;
