import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body style={{
                margin: 0,
                padding: 0,
                background: 'linear-gradient(180deg, #000000 0%, #1B1B1B 100%)',
                }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
