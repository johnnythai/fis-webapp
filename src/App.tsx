import FetchTokenButton from "./components/buttons/fetchTokenButton";
import { withCookies, useCookies } from "react-cookie";


const App = () => {
	const [cookies,setCookie, removeCookie] = useCookies(['authentication']);

	return (
		<div className="App">
			<h4>Sanbox Application for FIS Horizon API.</h4>

			<FetchTokenButton token='fis' setCookie={setCookie}/>
			<FetchTokenButton 
				token='horizon'
				fisToken={cookies.authentication.fisToken}
				setCookie={setCookie}
			/>
		</div>
	);
};

export default withCookies(App);
