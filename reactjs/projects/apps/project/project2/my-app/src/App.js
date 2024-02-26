import './App.css';
import Register from './pages/resgister/Register';
import Movies from './pages/movies/Movies';
import Information from './pages/info/Information';
import Showcase from './pages/showcase/Showcase';
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Register></Register>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/movies' element={<Movies></Movies>}></Route>
    <Route path='/info' element={<Information></Information>}></Route>
    <Route path='/show' element={<Showcase></Showcase>}></Route>
    <Route path='*' element={<h2>page route not found</h2>}></Route>
    </Routes>
    </>
  )
}

export default App;
