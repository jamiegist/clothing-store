import './Home.css';
import Shop from './Shop';
import { Link } from "react-router-dom";
import HeroImage from './images/hero-img.jpg';

export default function Home() {
    return (
        <div className='homepage'>
        <h1>Vetêments</h1>
        <div className='hero-section'>
            <img src={HeroImage} className='hero-img' alt='portait of three women'/>
            <div class="middle">
                <div class="text">
                    <Link className='shop-link' to='shop'>Shop Now</Link>
                    </div>
            </div>
        </div>
        </div>
    );
}