import React, { Component } from 'react'
import Demo from './components/1_setState'
import Demo2 from './components/2_lazyLoad'
import Demo3 from './components/3_hooks'
import Demo4 from './components/4_Fragment'
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    // return (
    //   <Demo demo={101}/>
    // )
  //  return(
  //    <Demo3>xxx</Demo3>
  //  )
    return(
      <Demo4></Demo4>
    )
}
}
