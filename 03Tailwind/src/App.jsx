import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObje={
    name:"hello",
    age:22
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card channel="hitesh" textbtn="your profile" />
      <Card channel="chai or code" Obj={myObje}  textbtn="view my profile"/>
    </>
  )
}

export default App
