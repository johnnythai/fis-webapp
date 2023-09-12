import { fetchApi } from "../../api/fetchApi";

interface FetchTokenButtonProps {
	token: string,
	fisToken?: string,
	setCookie: any
}

const FetchTokenButton = (props: FetchTokenButtonProps) => {
	const fetchFisToken = async () => {
		const auth = await fetchApi(`/api/authorization/${props.token}`);
		props.setCookie('authentication', auth, { secure: true, sameSite: 'none' });
	};

	const fetchHorizonToken = async () => {
		const options = {
			fisToken: props.fisToken,
		};		

		const auth = await fetchApi(`/api/authorization/${props.token}`, options);
		props.setCookie('authentication', auth, { secure: true, sameSite: 'none' });
	};

	const fetchRequestedToken = async () => {
		props.token === 'fisToken' ? fetchFisToken() : fetchHorizonToken();
	};

	return(
		<button onClick={fetchRequestedToken}>Request {props.token} Token</button>
	);
};

export default FetchTokenButton;
