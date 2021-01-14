import Link from 'next/link'

export default function Footer() {
return (

        <footer className="bg-brand-100 mt-5">
                <div>
                <img src="/cornice.svg"></img>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 pb-8 px-5 mt-12 md:container md:mx-auto">
                

                <div className="flex-1 mb-8">
                    <h5 className="font-semibold text-brand-300 uppercase mb-2 tracking-widest">Argomenti</h5>
                    <ul className="space-y-1 text-brand-400">
                    <li>
                        <Link href="/">
                        <a className="hover:text-brand-600 ml-2">
                            WebApp
                        </a>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/">
                        <a className="hover:text-brand-600 ml-2">
                            Sicurezza
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <a className="hover:text-brand-600 ml-2">
                            Fotografia
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <a className="hover:text-brand-600 ml-2">
                            Marketing
                        </a>
                        </Link>
                    </li>
                    </ul>
                </div>



                <div className="flex-1">
                    <h5 className="font-semibold text-brand-300 uppercase mb-2 tracking-widest">Informazioni</h5>
                    <ul className="space-y-1 text-brand-400">
                    <li>
                        <Link href="/chi-sono-biografia">
                        <a className="hover:text-brand-600 ml-2">
                            Chi sono
                        </a>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/dicono-di-me">
                        <a className="hover:text-brand-600 ml-2">
                            Dicono di me
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contatti">
                        <a className="hover:text-brand-600 ml-2">
                            Contatti
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cookie-privacy-policy">
                        <a className="hover:text-brand-600 ml-2">
                            Cookie Privacy policy
                        </a>
                        </Link>
                    </li>
                    
                    </ul>
                </div>

                
                
                </div>

                <div>
                <div className="md:container md:mx-auto flex flex-row text-xs pb-2 px-2 justify-between text-brand-300">
                    <div>
                    &copy;2021 Luca Pellizzaro
                    </div>
                    <div>
                    Creato con &hearts; da <a href="https://bearoba.it" className="hover:text-brand-500 hover:underline" target="_blank">bearoba.it</a>
                    </div>
                </div>
                </div>
            </footer>

)
}
