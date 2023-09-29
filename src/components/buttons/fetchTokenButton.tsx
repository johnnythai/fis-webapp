import { fetchApi } from "../../api/fetchApi";

interface FetchTokenButtonProps {
	token: string,
	authentication: {
		fisToken?: string,
		horizonToken?: string
	},
	setCookie: any 
}

const FetchTokenButton = (props: FetchTokenButtonProps) => {
	const fetchFisToken = async () => {
		const auth = await fetchApi(`/api/authorization/${props.token}`);

		if (!auth.access_token) {
			alert('Unable to authenticate.');	
			return;
		}

		const authToken = JSON.stringify({ fisToken: auth.access_token })
		console.log('auth: ', authToken);
		props.setCookie(
			'authentication', 
			authToken,
			{ secure: true, sameSite: 'none' }
		);

		alert(`Authenticated. ${props.token} token received`);
	};

	const fetchHorizonToken = async () => {
		if (!props.authentication) {
			alert('FIS authentication required');
			return	
		}	

		const auth = await fetchApi(`/api/authorization/${props.token}`,{
			headers: { fisToken: props.authentication.fisToken },
		});
		props.authentication.horizonToken = auth.jwt;
		props.setCookie(
			'authentication', 
			JSON.stringify(props.authentication), 
			{ secure: true, sameSite: 'none' }
		);

		alert(`Authenticated. ${props.token} token received`);
	};

	const fetchRequestedToken = async () => {
		props.token === 'FIS' ? await fetchFisToken() : await fetchHorizonToken();
	};

	return(
		<button onClick={fetchRequestedToken}>Request {props.token} Token</button>
	);
};

export default FetchTokenButton;
