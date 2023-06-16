import React from 'react'
import { FaAddressCard, FaCalculator, FaListAlt, FaTachometerAlt, FaUsers, FaWindowMaximize } from 'react-icons/fa'

const Feactures = () => {
  return  <>
    <section id="ofrecemos" className="flex flex-col justify-center items-center h-full mdh:h-screen bg-white" >

<div className="flex items-center justify-center font-test text-2xl font-semibold pt-10 lg:pt-32">
    <h1 className="font-extrabold text-1xl lg:text-5xl border-b-4 border-yellow-400 pb-4 uppercase text-black">características</h1>
</div>

<div className="mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-4 justify-center h-full  text-black font-test">

    <div className="flex flex-col items-center justify-center w-full rounded-3xl p-10 text-center gap-3 ">
         <FaAddressCard  className="text-8xl" /> 
        <h1 className="text-xl font-semibold text-yell">Autenticacion y permisos</h1>

        <p>Autenticacion de usuario para administradores y trabajadores con permisos personalizados</p>

    </div>

    <div className="flex flex-col items-center justify-center w-full rounded-3xl p-10 text-center gap-3 ">
        <FaListAlt className="text-8xl" />
        <h1 className="text-xl font-semibold">Facil acceso a datos</h1>

        <p>Acceso a informacion de la empresa con gran facilidad</p>

    </div>

    <div className="flex flex-col items-center justify-center w-full rounded-3xl p-10 text-center gap-3 ">

        <FaTachometerAlt className="text-8xl" />
        <h1 className="text-xl font-semibold">Rapidez en consultas</h1>

        <p>Autenticacion de usuario para administradores y trabajadores con </p>

    </div>

    <div className="flex flex-col items-center justify-center w-full rounded-3xl p-10 text-center gap-3 ">

        <FaWindowMaximize className="text-8xl" />
        <h1 className="text-xl font-semibold">Interfaz interactiva y facil</h1>

        <p>Autenticacion de usuario para administradores y trabajadores con </p>

    </div>

    <div className="flex flex-col items-center justify-center w-full rounded-3xl p-10 text-center gap-3 ">

        <FaUsers className="text-8xl" />
        <h1 className="text-xl font-semibold">Adminstracion de trabajadores</h1>

        <p>Autenticacion de usuario para administradores y trabajadores con </p>

    </div>

    <div className="flex flex-col items-center justify-center w-full rounded-3xl p-10 text-center gap-3 ">

        <FaCalculator className="text-8xl" />
        <h1 className="text-xl font-semibold">Movimientos de productos en tiempo real</h1>

        <p>Autenticacion de usuario para administradores y trabajadores con </p>

    </div>



</div>
</section>
  
  
  </>
}

export default Feactures

