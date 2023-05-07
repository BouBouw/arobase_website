import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return(
        <div className="p-24 mt-5">
            <div className="flex flex-row space-x-24">
                <div className="flex flex-col space-y-5 justify-center md:ml-24">
                    <div>
                        <span className="text-4xl text-white font-bold">Ils nous font <span className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300'>confiances</span></span>
                    </div>
                    <div>
                        <p className="text-gray-400 w-auto md:w-2/4">
                            Quelque chose qui vous intéresse ? N'hésitez pas a jeter un oeil sur nos articles ci-dessous ! Vous avez du choix.
                        </p>
                    </div>
                </div>
                <ul className="hidden md:flex flex-row space-x-10 items-center justify-center">
                    <li>
                        <button className="bg-gradient-to-r from-blue-700 to-indigo-400 hover:from-amber-500 hover:to-orange-300 text-white font-bold rounded-md h-10 w-36">
                            <span className="p-5">Tous</span>
                        </button>
                    </li>
                    <li>
                        <button className="bg-transparent hover:bg-gradient-to-r from-amber-500 to-orange-300 text-white font-bold rounded-md h-10 w-36">
                            <span className="p-5">Entreprises</span>
                        </button>
                    </li>
                    <li>
                        <button className="bg-transparent hover:bg-gradient-to-r from-amber-500 to-orange-300 text-white font-bold rounded-md h-10 w-48">
                            <span className="p-5">Serveurs Discord</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="mt-24 flex flex-col space-y-5">
                <div className='bg-neutral-700 hidden md:flex flex-row space-x-10 items-center justify-center'>
                    <div className='p-5'>
                        <a href='https://zkillu.fr/' className=''>
                            <img src='https://imgur.com/7aIrz9T.png' alt='' className='w-24 h-24'></img>
                        </a>
                    </div>
                    <div className='p-5'>
                        <a href='https://www.cryptotech.fr/' className=''>
                            <img src='https://imgur.com/WjXOGpy.png' alt='' className='w-24 h-24'></img>
                        </a>
                    </div>
                    <div className='p-5'>
                        <a href='https://icemind.com/' className=''>
                            <img src='https://imgur.com/lOhno3M.png' alt='' className='w-24 h-24'></img>
                        </a>
                    </div>
                    <div className='p-5'>
                        <a href='https://www.strategiescape.fr/' className=''>
                            <img src='https://imgur.com/tFCHs8W.png' alt='' className='w-24 h-24'></img>
                        </a>
                    </div>
                    <div className='p-5'>
                        <a href='https://komlink.co/' className=''>
                            <img src='https://imgur.com/hzWIJzZ.png' alt='' className='w-24 h-24'></img>
                        </a>
                    </div>
                </div>
                <div className='container block md:hidden'>
                    <div class="pic-ctn ml-24">
                        <img src='https://imgur.com/7aIrz9T.png' alt='' className='pic'></img>
                        <img src='https://imgur.com/WjXOGpy.png' alt='' className='pic'></img>
                        <img src='https://imgur.com/lOhno3M.png' alt='' className='pic'></img>
                        <img src='https://imgur.com/tFCHs8W.png' alt='' className='pic'></img>
                        <img src='https://imgur.com/hzWIJzZ.png' alt='' className='pic'></img>
                    </div>
                </div>
                <div className='md:pt-10'>
                    <ul className='hidden md:flex flex-row space-x-24 items-center justify-center'>
                        <li>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md'>
                                <FontAwesomeIcon icon={ faArrowLeft } />
                            </button>
                        </li>
                        <li>
                            <div className='flex flex-row space-x-3 items-center justify-center text-white'>
                                <span> 1 </span>
                                <span>/</span>
                                <span> 1 </span>
                            </div>
                        </li>
                        <li>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md'>
                                <FontAwesomeIcon icon={ faArrowRight } />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;