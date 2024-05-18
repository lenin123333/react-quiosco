import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto"

export default function Resumen() {
  const { pedido,total } = useQuiosco()
  const comprobarPedido=()=> pedido.length===0;
  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className="text-4xl font-black">
        Mi Pedido
      </h1>
      <p className=" text-lg my-5">
        Aquí podras ver el resumen y totales de tu pedido
      </p>
      <div className=" py-10">
        {pedido.length === 0 ? (
          <p className=" text-center text-2xl">No hay elementos en tu pedido aún</p>
        ) : (
          
            pedido.map(producto => (
              <ResumenProducto key={producto.id} producto={producto} />
            ))
          
        )}
      </div>

      <p className=" text-xl mt-10">
        Total:{''} {formatearDinero(total)}
      </p>

      <form className=" w-full">
        <div className=" mt-5">
          <input type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-100 cursor-none': 'bg-indigo-600   cursor-pointer hover:bg-indigo-800'}  px-5 py-2 
            rounded uppercase font-bold text-white text-center w-full 
           `}
             disabled={comprobarPedido()}
            value={'Confirmar Pedido'}
          />

        </div>
      </form>
    </aside>
  )
}
