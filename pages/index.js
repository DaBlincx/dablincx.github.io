import Image from 'next/image'
import NavBar from './_navbar'
import Footer from './_footer'

export default function Home() {
    return (
        <div>
            <NavBar />
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(180deg, #666666 0%, rgba(0,0,0,0.5) 100%)',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'right',
                }}>
                    <div style={{
                        fontSize: '4.5rem',
                        fontWeight: '700',
                        color: '#FFFFFF',
                    }}>
                        dablincx
                    </div>
                    <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '400',
                        color: '#FFFFFF',
                    }}>
                        web design & software development
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
