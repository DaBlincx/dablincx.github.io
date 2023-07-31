import Image from "next/image";
import Link from "next/link";

function NavBar({ bgColor }) {
    if (bgColor == null) {
        bgColor = 'transparent';
    }
    return (
        <div style={{
            background: bgColor,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            alignItems: 'right',
            padding: '1rem 1.5rem',
            paddingRight: '1.5rem',
            //what the fuck is this god damn
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.3rem',
                color: '#FFFFFF',
            }}>
                <div className="navbar-link">
                    <Link href="/">Home</Link>
                </div>
                <div className="navbar-link">
                    <Link href="/projects">Projects</Link>
                </div>
                <div className="navbar-link">
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="navbar-link">
                    <Link href="/about">About</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;