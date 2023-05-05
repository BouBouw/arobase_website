import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return(
        <div className="p-24">
            <div className="flex flex-col space-y-5 justify-center ml-24">
                <div>
                    <span className="text-4xl text-white font-bold">Nous <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300">contacter</span></span>
                </div>
                <div>
                    <p className="text-gray-400 w-1/4">
                        Contactez l'équipe d'Arobase en nous envoyant votre adresse e-mail.
                    </p>
                </div>
            </div>
            <div className="mt-24 flex items-center justify-center bg-neutral-700 rounded-lg">
                <div className="p-5">
                    <div className="flex flex-col space-y-10 items-center justify-center">
                        <span className="text-white font-bold">contact@arobase.fr</span>
                        <div className="">
                            <form className="flex flex-row space-x-2">
                                <input type="email" className="p-3 bg-white text-orange-300 placeholder:text-sky-500 rounded-lg" placeholder="Adresse e-mail"></input>
                                <input type="submit" className="p-3 text-white font-bold bg-gradient-to-r hover:bg-gradient-to-r from-blue-700 hover:from-amber-500 to-indigo-400 hover:to-orange-300 rounded-lg" value={"Envoyer un mail"}></input>
                            </form>
                        </div>
                        <div className="">
                            <ul className="flex flex-row space-x-10 items-center justify-center">
                                <li>
                                    <a href='https://github.com/ArobaseSc' className='text-white'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faGithub } />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://discord.gg/qnsgFUGGX6' className='text-white'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faDiscord } />
                                    </a>
                                </li>
                                <li>
                                    <a href='/#' className='text-white'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faLinkedin } />
                                    </a>
                                </li>
                                <li>
                                    <a href='/#' className='text-white'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faTwitter } />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;