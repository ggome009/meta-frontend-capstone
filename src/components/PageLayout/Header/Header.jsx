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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/under-construction">About</Link></li>
                        <li><Link to="/under-construction">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/under-construction">Order Online</Link></li>
                        <li><Link to="/under-construction">Login</Link></li>
                    </ul>
                    <Button className="nav-btn" onClick={toggleOpen}><FaBars/></Button>
                </div>
            </nav>
            <ul className={`mobile-nav ${open ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/under-construction">About</Link></li>
                <li><Link to="/under-construction">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/under-construction">Order Online</Link></li>
                <li><Link to="/under-construction">Login</Link></li>
            </ul>
        </header>
    )
}

export default Header
