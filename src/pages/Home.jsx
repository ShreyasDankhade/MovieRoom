import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

// Step 1 - Component creation
export function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPopularMovie = async () => {
			try {
				const popularMovies = await getPopularMovies();
				setMovies(popularMovies);
			} catch (err) {
				console.log(err);
				setError("Failed to load the movie.");
			} finally {
				setLoading(false);
			}
		};
		loadPopularMovie();
	}, []);

	const handleSearch = async (e) => {
		e.preventDefault(); // Stops clearing the input box.
		if (!searchQuery.trim()) return; //Removes the leadin & trailing whitespaces
		if (loading) return;

		setLoading(true);
		try {
			const searchResult = await searchMovies(searchQuery);
			setMovies(searchResult);
			setError(null);
		} catch (err) {
			console.log(err);
			setError("Failed to search movie");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="home">
			<form onSubmit={handleSearch} className="search-form">
				<input
					type="text"
					placeholder="search for movies..."
					className="search-input"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button type="submit" className="class-button">
					Search
				</button>
			</form>
			{/* Displaying error message if an Error occurs */}
			{error && <div className="error-message">{error}</div>}
			{/* Applying loading state to the webpage */}
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="movies-grid">
					{movies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</div>
	);
}
