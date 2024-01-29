import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'
import Head from 'next/head'

export default function about() {

    const age = Math.floor((Date.now() - new Date('2007-01-03').getTime()) / (365.25 * 24 * 60 * 60 * 1000))

    return (
        <div>
            <Head>
                <title>about me | dablincx</title>
                <meta name="description" content="interesting stuff about me" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <NavBar/>
            <div className='about-heading-background'>
                <div className='about-heading-container'>
                    <div className='about-heading-title'>
                        about me
                    </div>
                    <div className='about-heading-subtitle'>
                        get to know me!
                    </div>
                </div>
            </div>
            <div className='about-container'>
                <div className='about-image-container'>
                    <Image
                        src='/media/pink_hair_minimalist.png'
                        alt='profile picture'
                        width={3000}
                        height={3000}
                        className='about-image'
                    />
                </div>
                <div className='about-text-container'>
                    hello, i&#39;m dablincx!<br />
                    <br />
                    i&#39;m a <span id='agedisplay'>{age}</span> year old developer from germany. i&#39;m currently in 11th grade and i&#39;m planning on studying computer science or something similar after i graduate.<br />
                    <br />
                    i started programming in 2019 and have been doing it ever since. i&#39;m currently working on a few projects, some of which you can find on my <Link
                        className='about-link-highlight'
                        href='https://github.com/DaBlincx'>
                        github
                    </Link>.<br />
                    <br />
                    i&#39;m an <span className='about-music-joke'>average music enjoyer<div className='about-music-joke-image-container'>
                        <Image
                            src='/media/average_music.gif'
                            alt='average rock music fan vs average dubstep enjoyer gif'
                            width={360}
                            height={360}
                        />
                    </div></span> and i listen to a lot of different genres but my favorites are dubstep, breakcore and whatever <Link
                        className='about-link-highlight'
                        href='https://soundcloud.com/acloudyskye'>
                        acloudyskye
                    </Link> does.<br />
                    <br />
                    i also like to play video games, my favorite game is probably <span
                        className='about-minecraft-highlight'>
                        minecraft.
                    </span><br />
                    <br />
                    also maybe take the &#34;web design&#34; part not too seriously lol
                </div>
                <script dangerouslySetInnerHTML={{__html: `
                    // 🤓 why u lookin here u nerd
                    const ageElement = document.getElementById('agedisplay');
                    const currentAge = Math.floor((Date.now() - new Date('2007-01-03').getTime()) / (365.25 * 24 * 60 * 60 * 1000));
                    ageElement.textContent = currentAge;
                `}} />
            </div>
            <Footer />
        </div>
    )
}