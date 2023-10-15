import './App.css'
import { Route,Switch } from 'wouter'

//Components
import { Navbar } from './components/Navbar.tsx'
import { Home,Heroes,HeroesDetail } from './pages'

function App() {
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/heroes/:heroesname" component={HeroesDetail } />
      </Switch>
    </>
  )
}

export default App
