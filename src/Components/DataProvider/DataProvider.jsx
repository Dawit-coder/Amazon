
import React, {createContext, useReducer } from 'react'


export const DataContext = createContext()  // Create a context

export const DataProvider = ({children, reducer, initialState})=>{
    return(

        //Provide the ouput of useReducer
        <DataContext.Provider value={useReducer(reducer, initialState)}>   
            {children}
        </DataContext.Provider>
    )
}