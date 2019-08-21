import React from 'react'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </div>
  )
}
