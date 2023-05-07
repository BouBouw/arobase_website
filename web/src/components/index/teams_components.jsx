import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Teams = () => {
    const imgOject = [
        `https://imgur.com/JnITf5s.jpg`,
        'https://imgur.com/jRwDbB6.jpg', 
        'https://imgur.com/UHNDuFF.jpg', 
        'https://imgur.com/edf93lA.jpg',
        'https://imgur.com/8f5Y6k5.jpg'
    ];

    const usernameObject = [
        'Leonarddoo',
        'BouBou',
        'Ergazia',
        'Yassapi',
        'Adrien'
    ]

    const nameObject = [
        'Samuel',
        'Samy',
        'Alexis',
        'Florian',
        'Adrien'
    ];
    
    const [ main, setMain ] = useState(0);
    
    function inRange(val) {
        if(val < 0) {
            return imgOject.length + val;
        } else if(val > imgOject.length - 1) {
            return val - imgOject.length;
        } else {
            return val;
        }
    }
    
    function leftScroll() {
        setMain((prevMain) => inRange(prevMain - 1));
    };
    
    function rightScroll() {
        setMain((prevMain) => inRange(prevMain + 1));
    };


    return(
        <div className="p-24 md:mt-5">
            <div className="flex flex-col space-y-5 justify-center md:ml-24">
                <div>
                    <span className="text-4xl text-white font-bold">Découvrez notre <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300">équipe</span></span>
                </div>
                <div>
                    <p className="text-gray-400 w-auto md:w-1/4">
                        Un profil vous intéresse ? N'hésitez pas a la soliciter sur notre Discord et lui faire part de vos projets.
                    </p>
                </div>
            </div>
            <div className="mt-24 hidden md:block" id="avatars">
                <ul className="flex flex-row space-x-5 items-center justify-center">
                    {imgOject.map((img, index) => 
                        <li>
                            <div className={`flex items-center justify-center ${main === index ? ' bg-gradient-to-r ' : ' bg-neutral-700 '} from-blue-700 to-indigo-400 w-32 h-32 rounded-md`}>
                                <img src={imgOject[inRange(index)]} alt='' className=''></img>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className='mt-24 block md:hidden'>
                <div className=''>
                    <img src={imgOject[inRange(main)]} alt='' className=''></img>
                </div>
            </div>
            <div className='pt-0 hidden md:block'>
                <ul className='flex flex-row space-x-24 items-center justify-center'>
                    <li className='pt-24'>
                        <img src={imgOject[inRange(main - 1)]} alt='' className='opacity-50' id='prev'></img>
                    </li>
                    <li className='pt-0'>
                        <img src={imgOject[inRange(main)]} alt='' className='' id='main'></img>
                    </li>
                    <li className='pt-24'>
                        <img src={imgOject[inRange(main + 1)]} alt='' className='opacity-50' id='next'></img>
                    </li>
                </ul>
            </div>
            <div className='pt-10'>
                <div className='flex flex-row space-x-48 items-center justify-center'>
                    <div className=''>
                        <ul className='flex flex-col space-y-5 items-center justify-center w-32'>
                            <li>
                                <button className='text-white bg-neutral-700 w-10 h-10 rounded-md' onClick={() => leftScroll()} id='left_btn'>
                                    <FontAwesomeIcon icon={ faArrowLeft } />
                                </button>
                            </li>
                            <li>
                                <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-400' id='last_user'>{usernameObject[inRange(main - 1)]}</span>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex flex-col space-y-5 items-center justify-center w-64'>
                            <li>
                                <span className='text-white font-bold text-4xl'>{nameObject[inRange(main)]}</span>
                            </li>
                            <li>
                                <p className='text-gray-500 font-bold text-xl'>
                                    Alias: <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300'>{usernameObject[inRange(main)]}</span>
                                </p>
                            </li>
                            <li>
                                <p className='text-gray-300 w-96 text-center'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. In nulla posuere sollicitudin aliquam
                                </p>
                            </li>
                            <li>
                                <ul className='flex flex-row space-x-10 items-center justify-center'>
                                    <li>
                                        <a href='/#' className='text-white'>
                                            <FontAwesomeIcon className='w-6 h-6' icon={ faGithub } />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='text-white'>
                                            <FontAwesomeIcon className='w-6 h-6' icon={ faTwitter } />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='text-white'>
                                            <FontAwesomeIcon className='w-6 h-6' icon={ faLinkedin } />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='text-white'>
                                            <FontAwesomeIcon className='w-6 h-6' icon={ faInstagram } />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex flex-col space-y-5 items-center justify-center w-32'>
                            <li>
                                <button className='text-white bg-neutral-700 w-10 h-10 rounded-md' onClick={() => rightScroll()} id='right_btn'>
                                    <FontAwesomeIcon icon={ faArrowRight } />
                                </button>
                            </li>
                            <li>
                                <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-400' id='next_user'>{usernameObject[inRange(main + 1)]}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex md:hidden items-center justify-center mt-10'>
                    <ul className='flex flex-row space-x-16 items-center justify-center'>
                        <li>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md' onClick={() => leftScroll()} id='left_btn'>
                                <FontAwesomeIcon icon={ faArrowLeft } />
                            </button>
                        </li>
                        <li>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md' onClick={() => rightScroll()} id='right_btn'>
                                <FontAwesomeIcon icon={ faArrowRight } />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Teams;