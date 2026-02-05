import { useState,useReducer ,useEffect} from 'react'
import { Header } from './components/Header'
import './App.css'
import PowerInputForm from './components/PowerInputForm';



function App() {
 
  return (
    <div id='app'>
    
    <Header img="https://cdn.shopify.com/s/files/1/2980/5140/articles/electricity_bill.jpg?v=1623842931"></Header>
    <main id='reading'>
      <PowerInputForm></PowerInputForm>
    </main>

    </div>
  )
}

export default App
