import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className="bg-neutral-800">
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="order-first md:ml-10">
                        <div className="flex flex-col space-y-5 justify-center pt-3 md:pt-0">
                            <div>
                                <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300'>Arobase</span>
                            </div>
                            <div>
                                <p className="text-white">
                                    Loreum Ipseum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1">
                        <div className='flex flex-col space-y-5 items-center justify-center'>
                            <p className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300 pt-3 md:pt-0'>Navigation</p>
                            <ul className='flex flex-col space-y-5 items-center justify-center text-center'>
                                <li>
                                    <a href='/client_area' className='text-white hover:underline hover:text-indigo-400'>Espace client</a>
                                </li>
                                <li>
                                    <a href='https://panel.botdiscord.fr/' className='text-white hover:underline hover:text-indigo-400'>Panneau de configutation</a>
                                </li>
                                <li>
                                    <a href='https://pma.botdiscord.fr/' className='text-white hover:underline hover:text-indigo-400'>Base de données</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-last md:mr-10">
                        <div className="flex flex-col space-y-5 items-center justify-center">
                            <p className='font-extrabold text-center text-transparent text-xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300'>Nos réseaux</p>
                            <ul className="flex flex-col md:flex-row space-y-3 md:space-x-5 items-center justify-center">
                                <li>
                                    <a href='https://github.com/ArobaseSc' className='text-white hover:text-indigo-400'>
                                        <FontAwesomeIcon className='md:pt-3 w-6 h-6' icon={ faGithub } />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://discord.gg/qnsgFUGGX6' className='text-white hover:text-indigo-400'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faDiscord } />
                                    </a>
                                </li>
                                <li>
                                    <a href='/#' className='text-white hover:text-indigo-400'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faLinkedin } />
                                    </a>
                                </li>
                                <li>
                                    <a href='/#' className='text-white hover:text-indigo-400'>
                                        <FontAwesomeIcon className='w-6 h-6' icon={ faTwitter } />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5">
                    <hr className="h-px my-8 bg-gray-400 border-0"></hr>
                    <p className="text-gray-400">Copyright © Arobase - 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;