import {  createContext,useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias,setCategorias] = useState(categoriasDB);
    const [categorioActual,serCategoriaActual]= useState(categorias[0])
    
    const handleClickCategoria = () =>{

    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categorioActual,
                handleClickCategoria
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext