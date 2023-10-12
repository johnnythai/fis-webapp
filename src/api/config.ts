const apiUrl = () => {
	if (process.env.NODE_ENV == 'production') {
		return 'https://fis.johnnythai.dev';
	}

	return 'http://localhost:4001';
};



export { apiUrl };
