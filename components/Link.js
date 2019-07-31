import React from 'react'
import { useStoreContext } from '../redux'
import { setVisibility } from '../actions'

const Link = ({ filter, children }) => {
  const [store, dispatch] = useStoreContext()

  const { FilterStore } = store
  const { active } = FilterStore

  return (
    <div className="todo-tab_item">
      <a
        href="#"
        style={{ color: filter === active ? "#f01414" : "#4d555d" }}
        onClick={e => {
					e.preventDefault()
					dispatch(setVisibility(filter))
        }}
      >
        {children}
      </a>
    </div>
  )
}

export default Link