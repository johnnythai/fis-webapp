import { apiUrl } from "./config";


export interface Options{
	token: string,	
	fisToken?: string,	
}

const fetchApi = async (pathParams: string, options?: Options) => {
	try{
		const response = await fetch(apiUrl + pathParams, {
			
		});

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const auth = await response.json();
		return auth
	} catch (error) {
		alert(error);
	}
};


export { fetchApi };
