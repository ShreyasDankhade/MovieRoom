const API_KEY = "add_your_api_key";
const BASE_URL = "https://api.themoviedb.org/3";

// async is used to get the data & it'll take a second to get the data.

export async function getPopularMovies() {
	const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
	const data = await response.json();
	return data.results;
}

export async function searchMovies(query) {
	const response = await fetch(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
			query
		)}`
	);
	const data = await response.json();
	return data.results;
}
