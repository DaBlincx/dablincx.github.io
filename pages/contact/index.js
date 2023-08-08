import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'
import Link from "next/link"
import Image from "next/image"

export default function projects() {
    return (
        <div>
            <NavBar/>
            <div className='contact-heading-background'>
                <div className='contact-heading-container'>
                    <div className='contact-heading-title'>
                        contact
                    </div>
                </div>
            </div>
            <div className='contact-container'>
                <div className='contact-element'>
                    <div className='contact-title'>
                        Discord
                    </div>
                    <div className='contact-discord-profile-container'>
                        <div className='contact-discord-image-container'>
                            <Image
                                className='contact-discord-image'
                                src={'https://cdn.discordapp.com/avatars/538719132783214607/77314a1341ef32d1c21196ae82d00efb.png?size=300'}
                                width={300}
                                height={300}
                                alt='discord profile picture'
                            />
                        </div>
                        <div className='contact-discord-text'>
                            <div className='contact-discord-displayname'>
                                ❱ DaBlincx ❰
                            </div>
                            <div className='contact-discord-tag'>
                                dablincx
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-element'>
                    <div className='contact-title'>
                        Email
                    </div>
                    <div className='contact-email-container'>
                        <div className='contact-email-image-container'>
                            <Image
                                className='contact-email-image'
                                src={'/media/mail.svg'}
                                width={300}
                                height={300}
                                alt='mail icon'
                            />
                        </div>
                        <div className='contact-email-address'>
                            <Link href='mailto:me@dablincx.dev'>
                                me@dablincx.dev
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='contact-element'>
                    <div className='contact-title'>
                        LinkedIn
                    </div>
                    <div className='contact-email-container'>
                        <div className='contact-email-image-container'>
                            <Image
                                className='contact-email-image'
                                src={'/media/linkedin.svg'}
                                width={300}
                                height={300}
                                alt='linkedin icon'
                            />
                        </div>
                        <div className='contact-email-address'>
                            <Link href='https://www.linkedin.com/in/emily-herrmann-288a57284/'>
                                My LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}