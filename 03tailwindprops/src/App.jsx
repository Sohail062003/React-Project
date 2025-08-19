import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const title = "Vite + React + Tailwind CSS";
  const userObject = {
    title: "Vite + React + Tailwind CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quae laboriosam mollitia neque eligendi eius aperiam hic dicta maxime repellat? Magnam velit autem quibusdam aut vero, quaerat eum exercitationem rerum."
  }

  return (
    <>
      <Card userObject={userObject}  />
    </>
  )
}

export default App
