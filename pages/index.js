import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
    return (
        <div style={
            {
                background: 'linear-gradient(180deg, #000000 0%, #1B1B1B 100%)',
                height: '100vh',
                width: '100vw',
                margin: 0,
                padding: 0,
            }
        }>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                width: '100vw',
                height: '100vh',
            }}>
                <h1 style={{
                    color: '#FFFFFF',
                    fontFamily: 'Inter',
                    fontSize: '4rem',
                }}>
                    hello cool people, me is editing this website (also i gotta test smth)<br/>
                    :3
                </h1>
                <Image
                    src="https://media.discordapp.net/attachments/1124714078162653244/1131305790079254598/bombcat.gif"
                    alt="bombcat"
                    width="500"
                    height="600"
                />
            </div>
        </div>
    )
}
