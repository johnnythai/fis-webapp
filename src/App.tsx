import React from 'react';
import { useCookies } from 'react-cookie';
import { apiUrl } from './api/config';


const App = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['authentication']);

	const fetchFisToken = () => {
		fetch(apiUrl + '/authorization/fis')
			.then(response => {
				if (!response.ok) {
					throw new Error('Network Error');
				}

				console.log('fetch response: ', response.json());
				return response;
			})
			// .then(fisToken => setCookie('fisToken', fisToken);
	
	};

	const fetchHorizonToken = () => {
	};

	return (
		<div className="App">
			<h4>Sanbox Application for FIS Horizon API.</h4>

			<button onClick={fetchFisToken}>Request FIS Token</button>	
			<button >Request Horizon Token</button>
		</div>
	);
};

export default App;
