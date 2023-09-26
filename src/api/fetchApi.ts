import { apiUrl } from "./config";


interface FetchOptions {
	method?: string,
	headers?: {
		'Content-Type'?: string
		fisToken?: string,
		horizonToken?: string,
	},
}



const fetchApi = async (pathParams: string, fetchOptions?: FetchOptions) => {
	try{
		const response = await fetch(apiUrl + pathParams, fetchOptions);

		if (!response.ok) {
			return new Error(`${response.status} ${response.statusText}`);
		}

		const auth = await response.json();
		console.log('fetch response: ', auth);
		return auth
	} catch (error) {
		alert(error);
	}
};


export { fetchApi };
