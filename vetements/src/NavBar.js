import './NavBar.css';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <a href='/' className='site-title'>Vêtements</a>
            <ul>
                <li className='active'>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/shop'>Shop</a>
                </li>
            </ul>
        </nav>
    )
}