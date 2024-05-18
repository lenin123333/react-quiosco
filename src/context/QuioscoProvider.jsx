import {  createContext,useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'
import {toast} from 'react-toastify'
const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias,setCategorias] = useState(categoriasDB);
    const [categorioActual,setCategoriaActual]= useState(categorias[0])
    const [modal,setModal]= useState(false)
    const [producto,setProducto] = useState({})
    const [pedido,setPedido]=useState([])
    
    const handleClickCategoria = id =>{
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
        
    }

    const handleClickModal=()=>{
        setModal(!modal)
    }

    const handleSetProducto=producto=>{
        setProducto(producto)
    }
    //De esta forma no agrgeamos a lo que le apliquemos destructory
    const handleAgregarPedido=({categoria_id,...producto}) =>{
        if(pedido.some( pedidoState=>pedidoState.id=== producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === 
                producto.id ? producto:pedidoState)
            setPedido(pedidoActualizado) 
            toast.success('Guardado Correctamente')
        }else{
            setPedido([...pedido,producto])
            toast.success('Producto Agregado')
            
        }
        handleClickModal()
        
    }

    const handleEditarCantidad = id =>{
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categorioActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad
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