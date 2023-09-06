import { apiUrl } from "./config";

const fetchFisToken = async () => {
	const fisToken = await fetch(apiUrl + '/authorization/fis')
	return fisToken;	
};

export { fetchFisToken };
