import { useCookies } from "react-cookie";
import { fetchToken } from "../../api/fetchToken";

const FetchFisTokenButton = () => {
	const [cookies, setCookie] = useCookies(['authentication']);

	const fetchFisToken = async () => {
		const auth = await fetchToken('fis');
		setCookie('authentication', auth, {secure: true, sameSite: 'none'});
	};
	
	return(
		<button onClick={fetchFisToken}>Request FIS Token</button>	
	);
};

export default FetchFisTokenButton;
