import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <div style={{
            width: '100%',
            height: '10vh',
            background: '#000000',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem 1.5rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    color: '#FFFFFF',
                }}>
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
                    <div style={{
                        marginLeft: '1rem',
                    }}>
                        <Link href="/imprint">Imprint</Link>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem 1.5rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1rem',
                }}>
                    <div style={{
                        marginLeft: '1rem',
                    }}>
                        <Link href="https://github.com/DaBlincx">
                            <Image src="/github.svg" width={30} height={30} style={{
                                color: '#FFFFFF',
                            }} alt="GitHub Icon" />
                        </Link>
                    </div>
                    <div style={{
                        marginLeft: '1rem',
                    }}>
                        <Link href="https://www.linkedin.com/in/emily-herrmann-288a57284/">
                            <Image src="/linkedin.svg" width={30} height={30} style={{
                                color: '#FFFFFF',
                            }} alt="LinkedIn Icon" />
                        </Link>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Footer;