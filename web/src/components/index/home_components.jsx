import icon from '../../addons/images/home_person.png';

const Index = () => {
    return(
        <div className="p-24">
            <div className="flex flex-row space-x-5 items-center justify-center">
                <div className="flex flex-col space-y-10 md:ml-24">
                    <div className=''>
                        <div className="flex flex-col space-y-3">
                            <p className="text-white font-bold text-4xl">
                                Bienvenue chez <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300">Arobase,</span>
                            </p>
                            <p className="text-white font-bold text-4xl hidden md:block">
                                Hum... Que dire de plus ?
                            </p>
                            <p className="text-gray-400 w-auto md:w-2/4">
                                Venez nous rejoindre sur notre serveur Discord au cas oû si vous avez besoin de notre aide ! Nous vous accueillerons et aiderons avec plaisir !
                            </p>
                        </div>
                    </div>
                    <div>
                        <a href='https://discord.gg/qnsgFUGGX6' className='bg-gradient-to-r from-blue-700 to-indigo-400 hover:from-amber-500 hover:to-orange-300 text-white font-bold rounded-md md:h-10 w-96 md:w-58 p-5'>
                            <span className='md:p-5'>Rejoindre le serveur</span>
                        </a>
                    </div>
                </div>
                <div className='bg_person hidden md:block'>
                    <img src={icon} alt='' className='icon_person'></img>
                </div>
            </div>
        </div>
    )
}

export default Index;