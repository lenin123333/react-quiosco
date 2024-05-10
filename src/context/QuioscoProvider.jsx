import {  createContext } from 'react'

const QuioscoContext = createContext()

const QuioscoProvider = () => {
    return (
        <QuioscoContext.Provider
            value={{
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