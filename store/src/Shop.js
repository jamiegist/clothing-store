import './Shop.css';
import WhiteShirt from './images/shirt.webp';
import PinkShirt from './images/pink-shirt.webp';
import BlackSuit from './images/black-suit.webp';
import GreenSneakers from './images/green-sneakers.webp';

export default function Shop() {
    return(
    <div className='shop-container'>
        <h1>Shop</h1>
        <div className='shop-grid'>
            <div className='product'>
                <img className='product-img' src={WhiteShirt} alt='man wearing a white shirt'/>
                <h4 className='product-name'>White T-Shirt</h4>
                <button className='add-to-cart-btn'>Add To Cart</button>
            </div>

            <div className='product'>
                <img className='product-img' src={PinkShirt} alt='man wearing a pink shirt' />
                <h4 className='product-name'>Pink T-Shirt</h4>
                <button className='add-to-cart-btn'>Add To Cart</button>
            </div>

            <div className='product'>
                <img className='product-img' src={BlackSuit} alt='woman wearing a black pants suit' />
                <h4 className='product-name'>Black Suit</h4>
                <button className='add-to-cart-btn'>Add To Cart</button>
            </div>
            <div className='product'>
                <img className='product-img' src={GreenSneakers} alt='two hands holding a pair of green sneakers' />
                <h4 className='product-name'>Green Nike Sneakers</h4>
                <button className='add-to-cart-btn'>Add To Cart</button>
            </div>
        </div>
    </div>
    );
}