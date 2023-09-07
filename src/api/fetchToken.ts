import { apiUrl } from "./config";

const fetchToken = async (token: string) => {
	try{
		const response = await fetch(`${apiUrl}/authorization/${token}`);

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const auth = await response.json();

		console.log('AUTHENTICATED.', auth);
		return auth
	} catch (error) {
		window.alert(error);
	}
};


export { fetchToken };
