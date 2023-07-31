import NavBar from "../_navbar"
import Footer from "../_footer"

export default function projects() {
    return (
        <div>
            <NavBar/>
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(180deg, #00ddff 0%, rgba(0,0,0,0.5) 100%)',
            }}>
                CONTENT
            </div>
            <Footer />
        </div>
    )
}