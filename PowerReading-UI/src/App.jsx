import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'


function App() {
 const arr=useState(0);
  console.log(arr)

  return (
    <>
    
    <Header img="https://cdn.shopify.com/s/files/1/2980/5140/articles/electricity_bill.jpg?v=1623842931"></Header>
    <button>change image</button>
    </>
  )
}

export default App
