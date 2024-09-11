import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Button from '../../Button/Button'
import logo from '../../../assets/Logo.svg'
import './Header.css'

let Header = () => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <header className="header-nav">
            <nav className="nav-container">
                <div className="nav-main">
                    <Link to="/">
                        <div className="image-container">
                            <img src={logo} />
                        </div>
                    </Link>
                    <ul className="nav-link-list">
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/under-construction"><a>About</a></Link></li>
                        <li><Link to="/under-construction"><a>Menu</a></Link></li>
                        <li><Link to="/booking"><a>Reservations</a></Link></li>
                        <li><Link to="/under-construction"><a>Order Online</a></Link></li>
                        <li><Link to="/under-construction"><a>Login</a></Link></li>
                    </ul>
                    <Button className="nav-btn" onClick={toggleOpen}><FaBars/></Button>
                </div>
            </nav>
            <ul className={`mobile-nav ${open ? 'open' : ''}`}>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/under-construction"><a>About</a></Link></li>
                <li><Link to="/under-construction"><a>Menu</a></Link></li>
                <li><Link to="/booking"><a>Reservations</a></Link></li>
                <li><Link to="/under-construction"><a>Order Online</a></Link></li>
                <li><Link to="/under-construction"><a>Login</a></Link></li>
            </ul>
        </header>
    )
}

export default Header
