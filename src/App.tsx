import './App.css'
import React from 'react'
import { Route as WouterRoute, Switch as WouterSwitch } from 'wouter'

//Components
import { Navbar as AppNavbar } from './components/Navbar'
import { Home as AppHome, Heroes as AppHeroes, HeroesDetail as AppHeroesDetail } from './pages'

const App: React.FC = () => {
  
  return (
    <>
      <AppNavbar>{/* Pass an empty ReactNode as a child */}</AppNavbar>
      <WouterSwitch>
        <WouterRoute path="/" component={AppHome} />
        <WouterRoute path="/heroes" component={AppHeroes} />
        <WouterRoute path="/heroes/:heroesname" component={AppHeroesDetail } />
      </WouterSwitch>
    </>
  )
}

export default App
