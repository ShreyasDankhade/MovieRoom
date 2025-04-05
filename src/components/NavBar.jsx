import { Link } from "react-router-dom";
import "../css/Navbar.css"

export function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<Link to="/">
					Movie App
					{/* Links acts as HYPERLINK option same as href */}
				</Link>
			</div>
			<div className="navbar-links">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/favorites" className="nav-link">
					Favorites
				</Link>
			</div>
		</nav>
	);
}
