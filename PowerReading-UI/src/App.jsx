import { Home } from './components/Home';
import './App.css'

import PowerInputForm from './components/PowerInputForm';
import {Route, Routes} from 'react-router-dom';



function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path='/form' element={<PowerInputForm></PowerInputForm>}></Route>
    </Routes>
  )
}

export default App
