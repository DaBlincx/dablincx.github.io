import NavBar from "../_navbar"
import Footer from "../_footer"
import Link from "next/link"

export default function projects() {
    return (
        <div>
            <NavBar/>
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(180deg, #00ddff 0%, #000000 100%)',
            }}>
                Projects

                <Link href="/projects/meme-video-generator">meme video ghen</Link>
            </div>
            <Footer />
        </div>
    )
}