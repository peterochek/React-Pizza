import { Cart, Home } from './pages'
import { Header } from './components'
import { Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    )
}

export default App


