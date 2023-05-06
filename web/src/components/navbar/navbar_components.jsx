import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo_web from '../../addons/images/arobase_text_logo.png';
import logo_mobile from '../../addons/images/arobase_icon.png';

const Navbar = () => {
    return(
        <div className="bg-neutral-800">
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="order-first">
                        <img src={logo_web} alt='' className=' hidden md:block h-6'></img>
                        <div className='p-2'>
                            <img src={logo_mobile} alt='' className='block md:hidden w-8 h-8'></img>
                        </div>
                    </div>
                    <div className="p-1">
                        <ul className='hidden md:flex flex-row space-x-5 items-center justify-center'>
                            <li>
                                <a href='/#' className='text-gray-200 hover:text-indigo-400'>Accueil</a>
                            </li>
                            <li>
                                <a href='/#' className='text-gray-200 hover:text-indigo-400'>Projets</a>
                            </li>
                            <li>
                                <a href='/#' className='text-gray-200 hover:text-indigo-400'>Equipe</a>
                            </li>
                            <li>
                                <a href='/#' className='text-gray-200 hover:text-indigo-400'>Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="order-last">
                        <div className="hidden md:flex flex-row space-x-5">
                            <button className="border-2 border-slate-800 text-white font-bold bg-gradient-to-r from-amber-500 to-orange-300 rounded-md h-8 w-42">
                                <span className="p-5">Se connecter</span>
                            </button>
                            <button className="border-2 border-slate-800 text-white font-bold bg-gradient-to-r from-amber-500 to-orange-300 rounded-md h-8 w-42">
                                <span className="p-5">S'enregistrer</span>
                            </button>
                        </div>
                        <div className='flex md:hidden items-center justify-center'>
                            <button className='p-3 text-orange-400'>
                                <FontAwesomeIcon icon={faBars}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;