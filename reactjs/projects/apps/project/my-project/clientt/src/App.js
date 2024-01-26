import Dashboard from './pages/dashboard'
import Signup from './pages/signup'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App(){
return (<>





<BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
</>)
}   