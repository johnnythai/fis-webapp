import FetchTokenButton from "./components/buttons/fetchTokenButton";
import { useCookies } from "react-cookie";
import CustomerRelationshipSummaryForm from "./components/forms/customerRelationshipSummaryForm";


const App = () => {
	const [cookies,setCookie] = useCookies(['authentication']);

	return (
		<div className="App">
			<h4>Sanbox Application for FIS Horizon API.</h4>

			<FetchTokenButton token='fis' setCookie={setCookie} />
			<FetchTokenButton 
				token='horizon'
				fisToken={cookies.authentication?.fisToken}
				setCookie={setCookie}
			/>
			<hr />
			<CustomerRelationshipSummaryForm horizonToken={cookies.authentication?.horizonToken} />
		</div>
	);
};

export default App;
