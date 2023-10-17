// import { apiUrl } from "./config";


interface FetchOptions {
	method?: string,
	headers?: {
		'Content-Type'?: string
		fisToken?: string,
		horizonToken?: string,
	},
}



const fetchApi = async (pathParams: string, fetchOptions?: FetchOptions) => {
	const apiUrl = process.env.REACT_APP_API_URL;

	try{
		console.log(`fetching from ${apiUrl} at ${pathParams} with options: ${fetchOptions}`);
		const response = await fetch(apiUrl + pathParams, fetchOptions);

		if (!response.ok) {
			return new Error(`${response.status} ${response.statusText}`);
		}

		console.log('response: ', response);
		const auth = await response.json();
		console.log('response.json: ', auth);
		return auth
	} catch (error) {
		alert(error);
		return
	}
};


export { fetchApi };
