import {Route, Switch, BrowserRouter} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
