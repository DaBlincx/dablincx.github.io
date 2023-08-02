import Image from 'next/image'
import NavBar from './_navbar'
import Footer from './_footer'
import RainContainer from './_rainContainer'

export default function Home() {
    return (
        <div>
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
