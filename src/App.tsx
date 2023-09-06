import { useCookies } from 'react-cookie';
import { apiUrl } from './api/config';


const App = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['authentication']);

	const fetchFisToken = async () => {
		await fetch(apiUrl + '/authorization/fis')
			.then(response => {
				if (!response.ok) {
					throw new Error('Network Error');
				}

				return response.json();
			})
			.then(fisToken => {
				setCookie('authentication', fisToken, {secure: true, sameSite: 'none'});
				console.log('COOKIES UPDATED: ', cookies.authentication);
			})

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
