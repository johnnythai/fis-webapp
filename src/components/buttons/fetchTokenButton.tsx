import { useCookies } from "react-cookie";
import { fetchToken } from "../../api/fetchToken";


interface FetchTokenButtonProps {
	token: string,
	fisToken?: string,
	setCookie: any
}

const FetchTokenButton = (props: FetchTokenButtonProps) => {
	// const [cookies, setCookie, removeCookie] = useCookies(['authentication']);

	const fetchRequestedToken = async () => {
		const auth = await fetchToken(props.token);
		// setCookie('authentication', auth, { secure: true, sameSite: 'none' });
	};

	return(
		<button onClick={fetchRequestedToken}>Request {props.token} Token</button>
	);
};

export default FetchTokenButton;
