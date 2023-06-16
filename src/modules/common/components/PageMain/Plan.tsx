import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";

function Plan() {
  return (
    <>
     <section className="bg-primary h-full mdh:h-screen ">
            <div className=" flex flex-col container mx-auto h-full items-center justify-center" id="planes">


                <div className="flex items-start justify-center mt-10 mb-10 text-white ">

                    <h1 className="font-extrabold text-3xl lg:text-5xl border-b-4 border-yellow-400 pb-4 ">PLANES</h1>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 h-full w-full mb-10 px-10">

                    <div className="flex flex-col items-center bg-gray-100 w-full h-full">

                        <div className="flex flex-col items-center justify-center border-b-2 w-full py-5">
                            <h1 className=" font-extrabold text-3xl xl:text-4xl text-gray-800 ">GRATUITO</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center border-b-2 w-full h-full">
                            
                            <h1 className="my-2 font-bold text-lg text-gray-800  transition-colors duration-300 transform  hover:scale-110">BENEFICIOS :</h1>
                            <ul className="my-2 w-full flex-1 mx-auto text-xl text-right">

                                <li className=" py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                    <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800  ">Acceso a web</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                    <FaTimes className="text-red-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800  ">Acceso a escritorio</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                    <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 1 tienda</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                    <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 10 empleados</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                    <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 50 tipos productos</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                    <FaCheck className="text-gray-700 opacity-70" />
                                    <span className="px-10 font-semibold text-gray-800 ">GRATIS</span>
                                </li>

                            </ul>

                        </div>

                        <div className=" w-full h-1/6">

                            <button className="p-5 bg-yellow-400 w-full h-full text-xl font-semibold">
                                PRUEBA GRATUITA
                            </button>

                        </div>
                    </div>

                    <div className="flex flex-col items-center bg-gray-100 w-full h-full">

                        <div className="flex flex-col items-center justify-center border-b-2 w-full py-5">
                            <h1 className=" font-extrabold text-3xl xl:text-4xl text-gray-800 ">EMPRENDEDOR</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center border-b-2 w-full h-full">
                            
                            <h1 className="my-2 font-bold text-lg text-gray-800  transition-colors duration-300 transform  hover:scale-110">BENEFICIOS :</h1>
                            <ul className="my-2 w-full flex-1 mx-auto text-xl text-right">

                                <li className=" py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800  ">Acceso a web</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaTimes className="text-red-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800  ">Acceso a escritorio</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 1 tienda</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 20 empleados</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 50 tipos productos</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">MENSUALIDAD</span>
                                </li>

                            </ul>

                        </div>

                        <div className=" w-full h-1/6">

                            <button className="p-5 bg-yellow-400 w-full h-full text-xl font-semibold">
                                CONSULTAR
                            </button>

                        </div>
                    </div>

                    <div className="flex flex-col items-center bg-gray-100 w-full h-full">

                        <div className="flex flex-col items-center justify-center border-b-2 w-full py-5">
                            <h1 className=" font-extrabold text-3xl xl:text-4xl text-gray-800 ">EMPRESARIO</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center border-b-2 w-full h-full">
                            
                            <h1 className="my-2 font-bold text-xl  text-gray-800  transition-colors duration-300 transform  hover:scale-110">BENEFICIOS :</h1>
                            <ul className="my-2 w-full flex-1 mx-auto text-xl text-right">

                                <li className=" py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800  ">Acceso a web</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaTimes className="text-red-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800  ">Acceso a escritorio</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 1 tienda</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 50 empleados</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">Maximo de 100 tipos productos</span>
                                </li>

                                <li className="py-5 pl-5 xl:pl-10 border-2 border-b border-t flex justify-between items-center">
                                <FaCheck className="text-gray-700 opacity-70 " />
                                    <span className="px-10 font-semibold text-gray-800 ">MENSUALIDAD</span>
                                </li>

                            </ul>

                        </div>

                        <div className=" w-full h-1/6">

                            <button className="p-5 bg-yellow-400 w-full h-full text-xl font-semibold">
                                CONSULTAR
                            </button>

                        </div>
                    </div>







                </div>












            </div>
        </section>
    
    
    </>
  )
}

export default Plan