import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import { MovieCard } from "./components/MovieCard";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { NavBar } from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
	return (
		<MovieProvider>
			<NavBar />
			<main className="main-content">
				<Routes>
					{/* Here we can define the routes to the components - like /Home, /Favorites */}
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</main>
		</MovieProvider>
	);
}

// function App() {
// 	const movieNumber = 2;

// 	return (
// 		<div>
// 			{movieNumber === 1 ? (
// 				<MovieCard movie={{ title: "ABCD", release_date: "2025" }} />
// 			) : (
// 				<MovieCard movie={{ title: "Ford VS Ferrari", release_date: "2025" }} />
// 			)}

// 			{/* {movieNumber === 1 && (
// 				<MovieCard movie={{ title: "ABCD", release_date: "2025" }} />
// 			)} */}
// 		</div>
// 	);
// }

export default App;
