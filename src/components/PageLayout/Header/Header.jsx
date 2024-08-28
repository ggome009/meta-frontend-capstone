import logo from '../../../assets/Logo.svg'
import './Header.css'

let Header = () => {
    return (
        <header className="header-nav">
            <nav className="desktop-nav">
                <div className="image-container">
                    <img src={logo} />
                </div>
                <ul className="nav-link-list">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
