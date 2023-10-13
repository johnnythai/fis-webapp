const getApiUrl = () => {
	if (process.env.REACT_APP_ENV === 'production') {
		return 'https://fis.johnnythai.dev';
	}

	return 'http://localhost:4001';
};

const apiUrl = getApiUrl();

export { apiUrl };
