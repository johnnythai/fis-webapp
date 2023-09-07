import { useCookies } from "react-cookie";
import {apiUrl} from "../../api/config";

const FetchHorizonTokenButton = () => {
	const [cookies, setCookie] = useCookies(['authentication']);

	const fetchHorizonToken = async () => {
		const fisToken = cookies.authentication.fisToken;

		await fetch(apiUrl + '/authorization/horizon', { 
			headers: { 'fisToken': fisToken },
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network Error');
				}
				
				return response.json();
			})
			.then(auth => {
				console.log('AUTHENTICATED.', auth);
				setCookie('authentication', auth, { secure: true, sameSite: 'none' });
			})
	};

	return(
		<button onClick={fetchHorizonToken}>Request Horizon Token</button>
	);
};

export default FetchHorizonTokenButton;
