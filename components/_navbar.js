import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function NavBar({ bgColor }) {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const currentPath = router.pathname;

    function isActive(path) {
        return path === currentPath ? 'navbar-link navlink-current' : 'navbar-link';
    }

    function toggleNavbar() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('navbar-open');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (bgColor == null) { bgColor = 'transparent'; }
    return (
        <div style={{ fontSize: '1.3rem' }}>
            <div className={scrolled ? "navbar-toggle-bg navbar-toggle-bg-display" : "navbar-toggle-bg"}>
                <div id="navbar-toggle" className="" onClick={toggleNavbar}>
                    Menu
                </div>
            </div>
            <div id="navbar" className="">
                <div style={{ width: '100%' }}>
                    <div className="navbar-menu" onClick={toggleNavbar}>
                        <div>Menu</div>
                        <div className="navbar-menu-arrow"></div>
                    </div>
                    
                    <Link href="/">
                        <div className={isActive("/")}>
                            Home
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div className={isActive("/projects")}>
                            Projects
                        </div>
                    </Link>
                    <Link href="/about">
                        <div className={isActive("/about")}>
                            About
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className={isActive("/contact")}>
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;