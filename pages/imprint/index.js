import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'
import Link from 'next/link'
import Head from 'next/head'

export default function projects() {
    return (
        <div>
            <Head>
                <title>imprint | dablincx</title>
                <meta name="description" content="legal stuff" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <NavBar/>
            <div className='imprint-content-container'>
                <div className='imprint-content-title'>
                    Imprint
                </div>
                <div className='imprint-content-law'>
                    Information according to §5 TMG (German Telemedia Act)
                </div>
                <div className='imprint-content-contact'>
                    <b>Owner:</b><br />
                    Bruno Herrmann<br />
                    <br />
                    <b>Address:</b><br />
                    The address will be provided upon request for privacy reasons.<br />
                    <br />
                    <b>Contact:</b><br />
                    Phone: <Link
                        href="tel:+4915255432513"
                        className='imprint-link-highlight'>
                        +49 15255432513
                    </Link><br />
                    E-Mail: <Link
                        href="mailto:me@dablincx.dev"
                        className='imprint-link-highlight'>
                        me@dablincx.dev
                    </Link><br />
                    <br />
                </div>
                <div className='imprint-content-text'>
                    <b>Liability for contents</b><br />
                    <br />
                    The contents of our pages were created with the utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages under the general laws according to § 7 para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of such infringements, we will remove this content immediately.<br />
                    <br />
                    <b>Liability for links</b><br />
                    <br />
                    Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.<br />
                    <br />
                    <b>Copyright</b><br />
                    <br />
                    The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.<br />
                    <br />
                    <b>Cookies & Tracking</b><br />
                    <br />
                    This website does not use cookies or tracking technologies.<br />
                </div>
            </div>
            <Footer />
        </div>
    )
}