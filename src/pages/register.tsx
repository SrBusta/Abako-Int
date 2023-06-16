import { useSignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ThemeToggle } from "~/modules/common/components/ThemeToggle";

type RegisterForm = {
  email: string;
  password: string;
  name: string;
};

const Register = () => {
  const { signUp, setActive } = useSignUp();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = handleSubmit(async ({ password, email, name }) => {
    console.log(name, email, password);
    await signUp
      ?.create({
        emailAddress: email,
        password,
        username: name,
      })
      .then((result) => {
        if (result.status === "complete") {
          // console.log(result);
          setActive({ session: result.createdSessionId });
        } else {
          console.log('SIN COMPLETAR',result);
        }
      })
      .catch((err) => {
        if (err.errors.length > 0)
          setError("password", {
            type: "manual",
            message: "Se produjo un error",
          });
      });
  });

  return (
    <div className=" grid h-full  min-h-screen grid-cols-1 bg-black lg:grid-cols-[40rem_1fr]">
      <Image
        className="absolute inset-0 z-0 h-full w-full object-cover blur-sm brightness-75 "
        src="/bg-login1.jpg"
        alt="Imagen de fondo"
        width={500}
        height={500}
      />
      <section className="z-10 flex justify-center px-3 py-7 ">
        <div className=" flex w-96 flex-col items-center justify-center px-2 py-8 lg:py-0 ">
          <div className="w-full rounded-lg bg-white/95 shadow backdrop-blur-sm dark:border dark:border-neutral-700 dark:bg-neutral-900/90  sm:max-w-md md:mt-0 xl:p-0">
            <ThemeToggle className="text-blue p-5" />
            <div className=" space-y-6 p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white ">
                Registrate
              </h1>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white"
                  >
                    Nombre
                  </label>
                  <input
                    {...register("name")}
                    className="block w-full "
                    type="text"
                    id="name"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white"
                  >
                    Correo
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    id="email"
                    className="block w-full "
                    placeholder="correo@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full "
                  />
                </div>

                <div className="flex items-center justify-between">
                  {errors.root && (
                    <p className="text-sm text-red-500">
                      {errors.root.message}
                    </p>
                  )}
          
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Registrarse
                </button>
                <p className="text-sm font-light text-neutral-500 dark:text-neutral-400">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Inicia sesión
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 hidden items-center justify-center p-5 lg:flex ">
        <h1 className="bg-white bg-clip-text text-6xl font-extrabold text-transparent xl:text-8xl">
          Bienvenido a nuestra comunidad
        </h1>
      </section>
      {/* <SignIn afterSignInUrl={"/dashboard"} path="/login" appearance={{elements:{logoImage:{WebkitFilter:'invert(100%)'}}}} /> */}
    </div>
  );
};

export default Register;
