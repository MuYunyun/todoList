import React from 'react'
import { render } from 'react-dom'
import todoApp from './reducers'
import App from './components/App'
import { StoreProvider } from './redux'

const FilterStore = {
  active: "SHOW_ALL"
}

render(
  <StoreProvider
    reducer={todoApp}
    initialState={{
			FilterStore,
    }}
  >
    <App />
  </StoreProvider>,
  document.getElementById("root")
)