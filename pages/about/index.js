import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'

export default function projects() {
    return (
        <div>
            <NavBar/>
            <div className='about-heading-background'>
                <div className='about-heading-container'>
                    <div className='about-heading-title'>
                        about me
                    </div>
                    <div className='about-heading-subtitle'>
                        get to know me! or something idk lol
                    </div>
                </div>
            </div>
            <div className='about-container'>
                <div className='about-image-container'>
                    <Image
                        src='/media/pink_hair_minimalist_main.png'
                        alt='profile picture'
                        width={3000}
                        height={3000}
                        className='about-image'
                    />
                </div>
                <div className='about-text-container'>
                    <div className='about-text'>
                        hello, i&#39;m dablincx!<br />
                        i&#39;m a 16 year old developer from germany. i&#39;m currently in 11th grade and i&#39;m planning on studying computer science after i graduate.<br />
                        i started programming in 2019 and have been doing it ever since. i&#39;m currently working on a few projects, some of which you can find on my <Link href='https://github.com/DaBlincx'>github</Link>.<br />
                        i&#39;m also a big fan of music, i listen to a lot of different genres but my favorites are dubstep and breakcore.<br />
                        i also like to play video games, my favorite game is probably <span className='about-minecraft-highlight'>minecraft</span>. 
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}