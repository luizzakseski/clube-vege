/* src/App.js */
import React, { Component } from 'react'
import {Routes,Route } from 'react-router-dom'


import Home from './pages/Home'
import Clube from './pages/Clube'
import AVege from './pages/AVege'
import Produtos from './pages/Produtos'
import Cliente from './pages/Cliente'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="Clube" element={<Clube />} />
        <Route path="AVege" element={<AVege />} />
        <Route path="Produtos" element={<Produtos />} />
        <Route path='Cliente' element={<Cliente />} />
      </Routes>
    )
  }
}
export default App