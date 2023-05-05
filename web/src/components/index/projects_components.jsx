import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return(
        <div className="p-24 mt-5">
            <div className="flex flex-row space-x-24">
                <div className="flex flex-col space-y-5 justify-center ml-24">
                    <div>
                        <span className="text-4xl text-white font-bold">Explorez notre <span className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300'>travail</span></span>
                    </div>
                    <div>
                        <p className="text-gray-400 w-2/4">
                            Quelque chose qui vous intéresse ? N'hésitez pas a jeter un oeil sur nos articles ci-dessous ! Vous avez du choix.
                        </p>
                    </div>
                </div>
                <ul className="flex flex-row space-x-10 items-center justify-center">
                    <li>
                        <button className="bg-gradient-to-r from-blue-700 to-indigo-400 hover:from-amber-500 hover:to-orange-300 text-white font-bold rounded-md h-10 w-36">
                            <span className="p-5">Tous</span>
                        </button>
                    </li>
                    <li>
                        <button className="bg-transparent hover:bg-gradient-to-r from-amber-500 to-orange-300 text-white font-bold rounded-md h-10 w-36">
                            <span className="p-5">Applications</span>
                        </button>
                    </li>
                    <li>
                        <button className="bg-transparent hover:bg-gradient-to-r from-amber-500 to-orange-300 text-white font-bold rounded-md h-10 w-36">
                            <span className="p-5">Site Web</span>
                        </button>
                    </li>
                    <li>
                        <button className="bg-transparent hover:bg-gradient-to-r from-amber-500 to-orange-300 text-white font-bold rounded-md h-10 w-36">
                            <span className="p-5">Bot Discord</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="mt-24 flex flex-col space-y-5">
                <div className='bg-neutral-700 flex flex-row space-x-10 items-center justify-center'>
                    <div className='p-5'>
                        a
                    </div>
                    <div className='p-5'>
                        b
                    </div>
                    <div className='p-5'>
                        c
                    </div>
                </div> 
                <div className='pt-10'>
                    <ul className='flex flex-row space-x-24 items-center justify-center'>
                        <li>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md'>
                                <FontAwesomeIcon icon={ faArrowLeft } />
                            </button>
                        </li>
                        <li>
                            <span className='text-gray-400'>1 / X</span>
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