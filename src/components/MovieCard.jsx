import { useMovieContext } from "../context/MovieContext";
import "../css/MovieCard.css";

export function MovieCard({ movie }) {
	// Here the useMovieContext gives access to all the functions defined in the MovieContext.
	const { isFavorites, addToFavorites, removeFromFavorites } =
		useMovieContext();

	const favorite = isFavorites(movie.id);
	function onFavClick(e) {
		e.preventDefault();
		if (favorite) removeFromFavorites(movie.id);
		else addToFavorites(movie);
	}

	return (
		<div className="movie-card">
			<div className="movie-poster">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className="movie-overlay">
					<button
						className={`favorite-btn ${favorite ? "active" : ""}`}
						onClick={onFavClick}
					>
						♥
					</button>
				</div>
			</div>
			<div className="movie-info">
				<h3>{movie.title}</h3>
				<p>{movie.release_date.split("-")[0]}</p>
			</div>
		</div>
	);
}
