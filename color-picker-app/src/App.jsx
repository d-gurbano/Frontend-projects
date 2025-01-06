import { useState } from 'react'
import ColorPicker from './ColorPicker'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorPicker></ColorPicker>
    </>
  )
}

export default App
