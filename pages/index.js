import Image from 'next/image'
import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'
import RainContainer from '@/components/_rainContainer'
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>dablincx</title>
                <meta name="description" content="web design & software development" />
            </Head>
            <NavBar />
            <div className='index-background'>
                <RainContainer />
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
