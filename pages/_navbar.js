import Image from "next/image";
import Link from "next/link";

function NavBar() {
    // navbar with projects, contact, about, and home
    return (
        <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            background: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'right',
            padding: '1rem 1.5rem',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: '#FFFFFF',
            }}>
                <div style={{
                }}>
                    <Link href="/">Home</Link>
                </div>
                <div style={{
                    marginLeft: '1rem',
                }}>
                    <Link href="/projects">Projects</Link>
                </div>
                <div style={{
                    marginLeft: '1rem',
                }}>
                    <Link href="/contact">Contact</Link>
                </div>
                <div style={{
                    marginLeft: '1rem',
                }}>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;