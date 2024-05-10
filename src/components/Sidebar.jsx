import React from 'react'
import { categorias } from '../data/categorias'
import Categoria from './Categoria'

export default function Sidebar() {
  return (
    <aside className='md:w-72'>
      <div className=' p-4'>
        <img className=' w-40' src="img/logo.svg" alt="" />
      </div>
      <div className='mt-10'>
        {categorias.map(categoria =>(
            <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
      <div className='my-5 py-5'>
        <button
            type='button'
            className=' text-center bg-red-500 hover:bg-red-600 w-full p-3 font-bold text-white'
        >Cancelar Orden</button>
      </div>
    </aside>
  )
}
