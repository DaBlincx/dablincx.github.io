import Link from "next/link"

export const metadata = {
    title: 'contact',
}

export default function Page() {
    return (
        <ul>
            <li>
                <Link href="/">
                    home
                </Link>
            </li>
            <li>
                <Link href="/about">
                    about
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    projects
                </Link>
            </li>
        </ul>
    )
}