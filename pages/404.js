import Link from 'next/link';

export default function error404() {
    return (
        <div className="error-404-container">
            <div className='error-404-number'>
                404
            </div>
            <div className='error-404-text'>
                This page could not be found.<br/>
                Go back to <Link href="/" className='error-404-link'>Home</Link>
            </div>
        </div>
    )
}