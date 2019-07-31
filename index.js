import React from 'react'
import { render } from 'react-dom'
import todoApp from './reducers'
import App from './components/App'
import { StoreProvider } from './redux'

const FilterStore = {
  SHOW_ALL: "show_all",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED",
}

render(
  <StoreProvider
    reducer={todoApp}
    initialState={{
			visibilityFilter: FilterStore
    }}
  >
    <App />
  </StoreProvider>,
  document.getElementById("root")
);