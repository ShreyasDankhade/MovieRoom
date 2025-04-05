import { useMovieContext } from "../context/MovieContext";
import "../css/Favorites.css";
import { MovieCard } from "../components/MovieCard";

export function Favorites() {
	const { favorites } = useMovieContext();

	if (favorites) {
		return (
			<div className="favorites">
				<h2>Your Favorites</h2>
				<div className="movies-grid">
					{favorites.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="favorites-empty">
			<h2>No Fav movie now...</h2>
			<p>Start adding Movies to Favorites</p>
		</div>
	);
}
