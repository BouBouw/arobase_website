const Contacts = () => {
    return(
        <div className="p-24">
            <div className="flex flex-col space-y-5 justify-center md:ml-24">
                <div>
                    <span className="text-4xl text-white font-bold">Nous <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300">contacter</span></span>
                </div>
                <div>
                    <p className="text-gray-400 w-auto md:w-1/4">
                        Contactez l'équipe d'Arobase en nous envoyant votre adresse e-mail.
                    </p>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className="mt-24 flex justify-between items-center shadow-2xl shadow-indigo-500/50 border-2 border-blue-700 w-96 md:w-auto rounded-lg p-10">
                    <div className='order-1'>
                        <div className="flex pl-52">
                            <span className='text-center text-white font-bold'>contact@arobase.fr</span>
                        </div>
                    </div>
                    <div className='order-2'>
                        <div className='flex flex-col space-y-5 pr-12'>
                            <span className=' text-white font-bold text-4xl'>Contacte-nous</span>
                            <p className='text-gray-400 w-96'>
                                Contactez l'équipe d'Arobase en nous envoyant votre adresse mail !
                            </p>
                            <div className='pt-10'>
                                <form className='bg-neutral-700 flex flex-row space-x-24 items-center justify-center rounded-md'>
                                    <div className='p-3'>
                                        <input type={"email"} className='bg-transparent h-10 w-96 focus:outline-none text-white' placeholder='Adresse e-mail'></input>
                                        <input type={"submit"} className='text-white font-bold bg-gradient-to-r hover:from-amber-500 from-blue-700 hover:to-orange-300 to-indigo-400 p-3 rounded-md w-32' value={"Envoyer"}></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block md:hidden'>
                <div className='mt-10 rounded-md'>
                    <div className='p-5'>
                        <div className='flex flex-col space-y-5 items-center justify-center'>
                            <span className='text-center text-white font-bold'>contact@arobase.fr</span>
                            <div className=''>
                                <form className='flex flex-col space-y-3 items-center justify-center'>
                                    <input type="email" className="p-3 bg-white text-orange-300 placeholder:text-sky-500 rounded-lg w-72" placeholder="Adresse e-mail"></input>
                                    <input type="submit" className="p-3 text-white font-bold bg-gradient-to-r hover:bg-gradient-to-r from-blue-700 hover:from-amber-500 to-indigo-400 hover:to-orange-300 rounded-lg w-72" value={"Envoyer un mail"}></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;