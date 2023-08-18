import Image from 'next/image'
import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'
import RainContainer from '@/components/_rainContainer'
import Head from 'next/head'

export default function index() {
    return (
        <div>
            <Head>
                <title>dablincx</title>
                <meta name="description" content="web design & software development" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <NavBar />
            <div className='index-background'>
                <RainContainer />
                <div></div>
                <div className='index-heading-container'>
                    <div className='index-heading-title'>
                        dablincx
                    </div>
                    <div className='index-heading-subtitle'>
                        web design & software development
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
