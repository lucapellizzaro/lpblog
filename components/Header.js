import Link from 'next/link'

export default function Header() {
        return (
            <header>

                    <div className="px-2 mb-10 mt-8">
                        <div className="mx-auto">
                                <Link href="/">
                                        <a>
                                                <img src="/luca-pellizzaro-monogram.svg" className="h-20 w-full"></img>
                                        </a>
                                </Link>
                        </div>
                    </div>

            </header>

    ) 
}