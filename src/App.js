import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Comapp from './components/App'
import ComponentTwo from './components/hooks'
import BasicDemo from './editorDemo/index'

let store = createStore(todoApp)
const ref = React.createRef()

export default class App extends React.Component{
  componentDidMount() {
    console.log(ref)
  }

  render () {
    return (
        <div>
          <BasicDemo/>
        </div>
    //   <Provider store={store}>
    //   <Comapp />
    //   <ComponentTwo/>
    // </Provider>
    )
  }
}