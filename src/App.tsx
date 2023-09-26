import FetchTokenButton from "./components/buttons/fetchTokenButton";
import { useCookies } from "react-cookie";
import RelationshipSummaryForm from "./components/forms/relationshipSummaryForm";


const App = () => {
	const [cookies, setCookie] = useCookies(['authentication']);

	return (
		<div className="App">
			<h4>Sanbox Application for FIS Horizon API.</h4>

			<FetchTokenButton 
				token='FIS' 
				authentication={cookies.authentication}
				setCookie={setCookie} />
			<FetchTokenButton 
				token='HORIZON'
				authentication={cookies.authentication}
				setCookie={setCookie} />
			<hr />
			<RelationshipSummaryForm 
				authentication={cookies.authentication} />
			<hr />
		</div>
	);
};

export default App;
