import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Productos({ producto }) {
    const {handleClickModal,handleSetProducto} = useQuiosco()
    const { nombre, imagen, precio } = producto

    return (
        <div className=" border p-3 shadow bg-white">
            <img src={`/img/${imagen}.jpg`} alt={`Imagen ${nombre}`} className="w-full" />
            <div className="p-5">
                <h3 className=" text-2xl font-bold">{nombre}</h3>
                <p className=" mt-5 font-black text-4xl text-amber-400">
                    {formatearDinero(precio)}
                </p>
                <button
                onClick={()=>{
                    handleClickModal() 
                    handleSetProducto(producto)}}
                    type="button"
                    className=" bg-indigo-600 hover:bg-indigo-800 text-white
                        w-full mt-5 p-3 uppercase font-bold"
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}
