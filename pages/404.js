import Link from 'next/link';
import Router from 'next/router';

export default function error404() {
    let validsuburls = ['/about', '/contact', '/projects', '/imprint'];
    let suburl = Router.asPath;
    if (validsuburls.includes(suburl)) {
        Router.push(suburl);
    }
    return (
        <div style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div style={{
                fontSize: '24px',
                fontWeight: '500',
                color: '#FFFFFF',
                borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                paddingRight: '23px',
                marginRight: '20px',
                lineHeight: '48px',
            }}>
                404
            </div>
            <div className='error-404-text' style={{
                fontSize: '14px',
                fontWeight: '400',
            }}>
                This page could not be found.<br/>
                Go back to <Link href="/" className='error-404-link'>Home</Link>
            </div>
        </div>
    )
}