import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual login logic
    const [userName, setUserName] = useState("John Doe"); // Replace with actual user data

    const toggleMenu = () => {
        const menuToggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    };

    const toggleDropdown = () => {
        const dropdown = document.querySelector('.dropdown-menu');
        dropdown.classList.toggle('active');
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('sticky', window.scrollY > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <Link to="/" className="logo">HERITAGE HUB</Link>
                <div className="toggle" onClick={toggleMenu}></div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Post">Posts</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    {isLoggedIn ? (
                        <li className="user-menu">
                            <span onClick={toggleDropdown}>{userName}</span>
                            <ul className="dropdown-menu">
                                <li><Link to="/uploadpost">Upload Post</Link></li>
                                <li><Link to="/uploadphoto">Upload Photo</Link></li>
                            </ul>
                        </li>
                    ) : (
                        <li><Link to="/login">User</Link></li>
                    )}
                </ul>
            </header>
        </>
    );
}

export default Header;
