import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-container">
                <div className="footer-pagelinks-container">
                    <div>
                        <Link className="styled-link" href="/contact">Contact</Link>
                    </div>
                    <div style={{ marginLeft: '1rem' }}>
                        <Link className="styled-link" href="/about">About</Link>
                    </div>
                    <div style={{ marginLeft: '1rem' }}>
                        <Link className="styled-link" href="/imprint">Imprint</Link>
                    </div>
                </div>
                <div className="footer-offpagelinks-container">
                    <div>
                        <Link href="https://github.com/DaBlincx">
                            <Image
                                src="/github.svg"
                                width={30}
                                height={30}
                                style={{ color: '#FFFFFF' }}
                                alt="GitHub Icon"
                            />
                        </Link>
                    </div>
                    <div style={{ marginLeft: '1.5rem' }}>
                        <Link href="https://www.linkedin.com/in/emily-herrmann-288a57284/">
                            <Image
                                src="/linkedin.svg"
                                width={30}
                                height={30}
                                style={{ color: '#FFFFFF' }}
                                alt="LinkedIn Icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;