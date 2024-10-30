import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const root = createRoot(document.getElementById('root'))

const button = <button onClick={() => alert('Hola mundo')}>Haz click</button>
root.render(button)