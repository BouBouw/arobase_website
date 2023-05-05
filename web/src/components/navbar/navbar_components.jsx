import logo from '../../addons/images/arobase_text_logo.png';

const Navbar = () => {
    return(
        <div className="bg-neutral-800">
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="order-first">
                        <img src={logo} alt='' className='h-6'></img>
                    </div>
                    <div className="p-1">
                        <ul className='flex flex-row space-x-5 items-center justify-center'>
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
                        <div className="flex flex-row space-x-5">
                            <button className="border-2 border-slate-800 text-white font-bold bg-gradient-to-r from-amber-500 to-orange-300 rounded-md h-8 w-42">
                                <span className="p-5">Se connecter</span>
                            </button>
                            <button className="border-2 border-slate-800 text-white font-bold bg-gradient-to-r from-amber-500 to-orange-300 rounded-md h-8 w-42">
                                <span className="p-5">S'enregistrer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;