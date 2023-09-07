import { apiUrl } from "./config";

const fetchToken = async (token: string) => {
	try{
		await fetch(`${apiUrl}/authorization/${token}`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network Error');
					console.log('NOT OK')
				}

				return response.json();
			})
			.then(auth => {
				console.log('AUTHENTICATED.', auth);
				return auth
			})
	} catch {
		const err = new Error('Unauthorized.');
		window.alert(err);
	}
};


export { fetchToken };
