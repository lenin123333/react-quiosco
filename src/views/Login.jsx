import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
       <h1 className=" text-4xl font-black">Iniciar Sesion</h1>
            <p>Para crear un pedido debes iniciar Sesión</p>
            <div className=" bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="">
                    
                    <div className="mb-4">
                        <label htmlFor="email" 
                            className=" text-slate-800"
                        >Correo:</label>
                        <input 
                            id="email"
                            type="email"
                            className="mt-2 w-full p-2 bg-gray-50"
                            name="email"
                            placeholder="Tu Correo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" 
                            className=" text-slate-800"
                        >Contraseña:</label>
                        <input 
                            id="password"
                            type="password"
                            className="mt-2 w-full p-2 bg-gray-50"
                            name="password"
                            placeholder="Tu Contraseña"
                        />
                    </div>
                   
                    <input type="submit"
                        value={'Iniciar Sesión'}
                        className=" bg-indigo-600 hover:bg-indigo-800 text-white
                         w-full mt-5 p-3 uppercase font-bold cursor-pointer   
                        "
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to={'/auth/register'}>¿No tienes cuenta? Crea Una</Link>
            </nav>
    </>
  )
}
