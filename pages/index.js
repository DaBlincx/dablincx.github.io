import { Inter } from 'next/font/google'

export default function Home() {
    return (
        <div style={
            {
                background: 'linear-gradient(180deg, #000000 0%, #1B1B1B 100%)',
                height: '100vh',
                width: '100vw',
                position: 'relative',
            }
        }>
            <h1 className="text-4xl font-bold text-center text-white" style={{
                fontFamily: 'Inter',
                top: '50%',
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '4rem',
            }}>
                hello cool people, me is editing this website
            </h1>
        </div>
  )
}
