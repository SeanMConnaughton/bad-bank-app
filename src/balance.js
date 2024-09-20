import React, { useContext } from 'react';
import { UserContext } from './context';

function Balance() {
	const ctx = useContext(UserContext);// Todo: Call the `useContext` hook with the `UserContext` object, and store it in a variable. Refer to alldata.js for example.
	return (
		<h1>
			Balance
			<br/>
			{JSON.stringify(ctx)}
		</h1>
	);
}

export default Balance;