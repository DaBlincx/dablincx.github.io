import Link from 'next/link';

export default function error404() {
    return (
        <div className="error-404-container">
            <div style={{
                fontSize: '24px',
                fontWeight: '500',
                color: '#FFFFFF',
                borderRight: '1px solid rgba(255,255,255,.3)',
                paddingRight: '23px',
                marginRight: '20px',
                lineHeight: '48px',
            }}>
                404
            </div>
            <div style={{
                fontSize: '14px',
                fontWeight: '400',
            }}>
                This page could not be found.<br/>
                Go back to <Link href="/" className='error-404-link'>Home</Link>
            </div>
        </div>
    )
}