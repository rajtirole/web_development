import { BrowserRouter} from 'react-router-dom';
import { Routes,Route,Link} from 'react-router-dom';
import { useState } from 'react';
import { Icon } from './comphonents/icons/Icon';

import './App.css';
import './comphonents/card/card.css';
import Cards from './comphonents/card/cards';
import Card from './comphonents/cards/card';
import Aa from './comphonents/apps/Cards'
import Comphonent1 from './comphonents/apps/Comphonent1'
import Comphonent4 from './comphonents/apps/comphonent4'
import Comphonent6 from './comphonents/apps/comphonent6'
import Comphonent7 from './comphonents/apps/comphonent7'
// import Comphonent10 from './comphonents/apps/Comphonent10'


function App(){
  return <>
   <BrowserRouter>
   
  <nav>
    <ul>
     <Link to='/home'><li>jfkasd</li></Link>
      <Link to='/Cards'><li>cards</li></Link>
      <Link to='/Card'><li>card</li></Link>
      <Link to='/Comphonent1'><li>aa</li></Link>
      <Link to='Comphonent4'><li>Cards</li></Link>
      <Link to='Comphonent6'><li>Comphonent1</li></Link>
      <Link to='Comphonent7'><li>Comphonent4</li></Link>
      {/* <Link to='Comphonent10'><li>Comphonent6</li></Link> */}
      {/* <Link to=''><li>Comphonent7</li></Link>
      <Link to=''><li>Comphonent10</li></Link> */}
    </ul>
  </nav>
 
<Routes>
  <Route path='/' element={<h1>homepage</h1>} />
  <Route path='/Cards' element={<Cards></Cards>} />
  <Route path='/Aa' element={  <Aa></Aa>} />
  <Route path='/Card' element={<Card></Card>} />
  <Route path='/Comphonent1' element={ <Comphonent1></Comphonent1>} />
  <Route path='/Comphonent4' element={ <Comphonent4></Comphonent4>} />
  <Route path='/Comphonent6' element={ <Comphonent6></Comphonent6>} />
  <Route path='/Comphonent7' element={ <Comphonent7></Comphonent7>} />
  {/* <Route path='/Comphonent10' element={ <Comphonent10></Comphonent10>} /> */}
 
  {/* 
 <Comphonent4></Comphonent4>
 <Comphonent6></Comphonent6>
 <Comphonent7></Comphonent7>
 <Comphonent10></Comphonent10> */}
 </Routes>
 </BrowserRouter>


  

  </>
}

export default App;
