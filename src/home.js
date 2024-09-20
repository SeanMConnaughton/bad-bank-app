import React, { useContext } from 'react';
import { UserContext } from './context';
import Card from './card';
function Home() {
	const ctx = useContext(UserContext);
	return (
		<>
			<Card
				txtcolor= "black" // Todo: Add the following props to the Card component:
				header= "BadBank Landing Module" // `txtcolor` should be "black"
				title= "Welcome to the bank" // `header` should be "BadBank Landing Module"
				text= "You can move around using the navigation bar." // `title` should be "Welcome to the bank"
				// `text` should be "You can move around using the navigation bar."
				body={
					<img src="bank.png" className="img-fluid" alt="Responsive image" />
				}
			/>
		</>
	);
}
export default Home;
