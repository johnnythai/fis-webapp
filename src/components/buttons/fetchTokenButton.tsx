import { fetchToken } from "../../api/fetchToken";


interface FetchTokenButtonProps {
	token: string,
	fisToken?: string,
	setCookie: any
}

const FetchTokenButton = (props: FetchTokenButtonProps) => {
	const fetchRequestedToken = async () => {
		const auth = await fetchToken(props.token);
		props.setCookie('authentication', auth, { secure: true, sameSite: 'none' });
	};

	return(
		<button onClick={fetchRequestedToken}>Request {props.token} Token</button>
	);
};

export default FetchTokenButton;
