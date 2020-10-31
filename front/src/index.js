import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
