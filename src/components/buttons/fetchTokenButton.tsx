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
		try {
			if (props.fisToken === undefined) {
				throw new Error('Invalid FIS Token.');
			}

			const fetchOptions = {
				headers: {
					fisToken: props.fisToken,
				},
			};		

			const auth = await fetchApi(`/api/authorization/${props.token}`, fetchOptions);
			props.setCookie('authentication', auth, { secure: true, sameSite: 'none' });
		} catch (error) {
			alert(error);
		}

	};

	const fetchRequestedToken = async () => {
		props.token === 'fis' ? fetchFisToken() : fetchHorizonToken();
	};

	return(
		<button onClick={fetchRequestedToken}>Request {props.token} Token</button>
	);
};

export default FetchTokenButton;
