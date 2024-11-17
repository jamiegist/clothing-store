import './Home.css';
import Shop from './Shop';
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className='homepage'>
        <h1>Vetêments</h1>
        <p>Welcome to Vetêments!</p>
        <button>
            <Link className="shop-button" to="shop">Shop Now</Link>
        </button>
        </div>
    );
}