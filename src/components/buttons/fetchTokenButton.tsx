import { fetchApi, Options } from "../../api/fetchApi";

interface FetchTokenButtonProps {
	token: string,
	fisToken?: string,
	setCookie: any
}

const FetchTokenButton = (props: FetchTokenButtonProps) => {
	const fetchRequestedToken = async () => {
		const options = {
			fisToken: props.fisToken?	
		};
		const auth = await fetchApi(`/api/authorization/${props.token}`, options);
		props.setCookie('authentication', auth, { secure: true, sameSite: 'none' });
	// set headers when fetching Horizon token
	};

	return(
		<button onClick={fetchRequestedToken}>Request {props.token} Token</button>
	);
};

export default FetchTokenButton;
