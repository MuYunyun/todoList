import React, { createContext, useContext, useReducer } from "react"

const StoreContext = createContext()

export const StoreProvider = ({reducer, initialState, children}) => {
  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)

/** 合并 reducer */
export const combineReducers = (reducers) => {
  return (state, action) => {
    const result = {}
    Object.entries(reducers).forEach(({ key, value }) => {
      result[key] = value(state[key], action) // 这里的 state[key] 有待考究
    })

    return result
  }
}