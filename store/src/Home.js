import './Home.css';
import Shop from './Shop';
import { Link } from "react-router-dom";
import HeroImage from './images/hero-img.webp';

export default function Home() {
    return (
        <div className='homepage'>
        <h1>Vetêments</h1>
        <img src={HeroImage} alt='group of women walking'/>
        <button>
            <Link className="shop-button" to="shop">Shop Now</Link>
        </button>
        </div>
    );
}