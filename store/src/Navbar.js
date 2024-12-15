import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="navbar-link" to="/">Vetêments</Link>
                </li>
                <li>
                    <Link className="navbar-link" to="shop">Shop</Link>
                </li>
                <li>
                    <Link className="navbar-link" to="about">About</Link>
                </li>
            </ul>
        </nav>
    );
}