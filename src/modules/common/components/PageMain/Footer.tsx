import React from 'react'

function Footer() {
  return (
    <>
     <footer>
            <div className="bg-gray-900 text-gray-200">
                <div className="max-w-7xl mx-auto lg:w-3/4 lg:mx-auto">
                    <div className="pt-4 grid grid-cols-1  lg:grid-cols-3 gap-2">
                        <div className="mb-5 mx-auto md:mx-auto ">

                            <h1 className="pt-2 font-bold text-xl">
                                (01)293-1115
                            </h1>
                        </div>

                        <div>

                        </div>
                        <div className="flex items-center justify-evenly mb-5 mx-auto md:mx-auto w-full">

                            <a className="cursor-pointer">
                                {/* <FontAwesomeIcon icon={faTwitter} size="2x" className="" /> */}
                            </a>

                            <a className="cursor-pointer">
                                {/* <FontAwesomeIcon icon={faFacebook} size="2x" className="" /> */}

                            </a>

                            <a className="cursor-pointer">
                                {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" className="" /> */}

                            </a>




                        </div>

                    </div>
                </div>
                <div className=" border-b-2 border-yellow-400 w-3/4 mx-auto "></div>
                <div className="max-w-7xl mx-auto lg:w-3/4 lg:mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                        <div className="flex flex-col items-center justify-center  gap-2">
                            <h1 className="font-bold text-xl">
                                Sobre Nosotros
                            </h1>

                            <a>
                                Nuestra historia
                            </a>

                            <a>
                                Reconocimientos
                            </a>

                            <a>
                                Nuestro equipo
                            </a>

                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-bold  text-xl">
                                Sobre Nosotros
                            </h1>

                            <a>
                                Nuestra historia
                            </a>

                            <a>
                                Reconocimientos
                            </a>

                            <a>
                                Nuestro equipo
                            </a>

                        </div>
                        <div className="w-full flex justify-center items-center col-span-full lg:col-auto my-4 ">

                            <form className="flex bg-white rounded-l">
                                <input className="p-2 rounded-l-lg text-gray-800 border-gray-200 bg-white w-3/4" placeholder="Correo" />
                                <button className="px-3 bg-yellow-400  text-gray-800 text-xs lg:text-base font-bold uppercase border-yellow-500">Subscribirte</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-12 text-gray-200 bg-secondary text flex flex-col justify-center items-center font-test text-center">
                <h1>
                    Copyright 2023 &copy; ABAKO. Todos los derechos reservados
                </h1>
            </div>
        </footer>
    
    </>
  )
}

export default Footer