import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

function NavBar({ bgColor }) {
    const router = useRouter();
    const currentPath = router.pathname;

    function isActive(path) {
        return path === currentPath ? 'navbar-link navlink-current' : 'navbar-link';
    }

    function toggleNavbar() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('navbar-open');
    }

    if (bgColor == null) {
        bgColor = 'transparent';
    }
    return (
        <div style={{
            fontSize: '1.3rem',
        }}>
            <div id="navbar-toggle" className="" onClick={toggleNavbar}>
                Menu
            </div>
            <div id="navbar" className="" style={{
                position: 'fixed',
                top: '0',
                right: '-350px',
                height: '100vh',
                width: '350px',
                background: '#000000',
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'right',
                padding: '1rem 1.5rem',
                paddingRight: '1.5rem',
                transition: '0.5s',
                zIndex: '2',
                fontSize: '1.3rem',
                //what the fuck is this god damn
            }}>
                <div style={{
                    color: '#FFFFFF',
                    width: '100%'
                }}>
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