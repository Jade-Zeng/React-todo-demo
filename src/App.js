import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Comapp from './components/App'

let store = createStore(todoApp)

export default class App extends React.Component{
  render () {
    return (
      <Provider store={store}>
      <Comapp />
    </Provider>
    )
  }
}