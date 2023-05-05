import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import team from '../../addons/images/teams_1.png';

const Teams = () => {
    const Users = (event) => {
        let imgOject = [
            `https://this-person-does-not-exist.com/img/avatar-gen11702cad1aea3b3ea2c0b0707d9283e6.jpg`,
            'https://this-person-does-not-exist.com/img/avatar-gen114c0c3b23c1a46b2b4a9a845dfc2224.jpg', 
            'https://this-person-does-not-exist.com/img/avatar-genbdb7c8a979ed3643ed8194283f2e3580.jpg', 
            'https://this-person-does-not-exist.com/img/avatar-gen35b4f3d462b85bb04c2d41babec35802.jpg',
            'https://this-person-does-not-exist.com/img/avatar-gencfd621e978b3d7a7b1b8aa92c7085332.jpg'
        ];

        let main = 0;
        let prev = imgOject.length - 1;
        let next = 1;

        function loadGalery() {
            let mainView = document.getElementById('main');
            mainView.src = imgOject[main];

            let prevView = document.getElementById('prev');
            prevView.src = imgOject[prev];

            let nextView = document.getElementById('next');
            nextView.src = imgOject[next];
        }

        function leftScroll() {
            prev = main;
            main = next;
           
            if(prev > (0 - 1)) {
                prev = imgOject.length + 1;
            } else {
                prev--;
            }

            loadGalery();
        }

        function rightScroll() {
            next = main;
            main = prev;

            if(next > (imgOject.length + 1)) {
                next = 0;
            } else {
                next++;
            }

            loadGalery();
        }

        document.getElementById('left_btn').addEventListener("click", leftScroll);
        document.getElementById('right_btn').addEventListener("click", rightScroll);
    }

    return(
        <div className="p-24 mt-5">
            <div className="flex flex-col space-y-5 justify-center ml-24">
                <div>
                    <span className="text-4xl text-white font-bold">Découvrez notre <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300">équipe</span></span>
                </div>
                <div>
                    <p className="text-gray-400 w-1/4">
                        Un profil vous intéresse ? N'hésitez pas a la soliciter sur notre Discord et lui faire part de vos projets.
                    </p>
                </div>
            </div>
            <div className="mt-24" id="avatars">
                <ul className="flex flex-row space-x-5 items-center justify-center">
                    <li>
                        <div className="flex items-center justify-center bg-gradient-to-r hover:bg-gradient-to-r from-blue-700 hover:from-amber-500 to-indigo-400 hover:to-orange-300 w-32 h-32 rounded-md">
                            <img src={team} alt='' className=''></img>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-center bg-neutral-700 hover:bg-gradient-to-r from-amber-500 to-orange-300 w-32 h-32 rounded-md">
                            <img src={team} alt='' className=''></img>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-center bg-neutral-700 hover:bg-gradient-to-r from-amber-500 to-orange-300 w-32 h-32 rounded-md">
                            <img src={team} alt='' className=''></img>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-center bg-neutral-700 hover:bg-gradient-to-r from-amber-500 to-orange-300 w-32 h-32 rounded-md">
                            <img src={team} alt='' className=''></img>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-center bg-neutral-700 hover:bg-gradient-to-r from-amber-500 to-orange-300 w-32 h-32 rounded-md">
                            <img src={team} alt='' className=''></img>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='pt-0'>
                <ul className='flex flex-row space-x-24 items-center justify-center'>
                    <li className='pt-24'>
                        <img src={team} alt='' className='opacity-50' id='prev'></img>
                    </li>
                    <li className='pt-0'>
                        <img src={team} alt='' className='' id='main'></img>
                    </li>
                    <li className='pt-24'>
                        <img src={team} alt='' className='opacity-50' id='next'></img>
                    </li>
                </ul>
            </div>
            <div className='pt-10'>
                <ul className='flex flex-row space-x-24 items-center justify-center'>
                    <li className='pr-12'>
                        <div className='flex flex-col space-y-5 items-center justify-center'>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md' onClick={Users} id='left_btn'>
                                <FontAwesomeIcon icon={ faArrowLeft } />
                            </button>
                            <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-400' id='last_user'>BouBouw</span>
                        </div>
                    </li>
                    <li className='pt-10'>
                        <ul className='flex flex-col space-y-10 items-center justify-center'>
                            <li>
                                <div className='flex flex-col space-y-5 items-center justify-center'>
                                    <span className='text-white font-bold text-4xl'>Samy HAMDI</span>
                                    <p className='text-gray-500 font-bold text-xl'>
                                        Alias: <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300'>BouBouw</span>
                                    </p>
                                </div>
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
                    </li>
                    <li className='pl-12'>
                        <div className='flex flex-col space-y-5 items-center justify-center'>
                            <button className='text-white bg-neutral-700 w-10 h-10 rounded-md' onClick={Users} id='right_btn'>
                                <FontAwesomeIcon icon={ faArrowRight } />
                            </button>
                            <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-400' id='next_user'>BouBouw</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Teams;