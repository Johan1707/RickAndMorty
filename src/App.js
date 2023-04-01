import './App.css';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import { About } from './components/About'
import { Deatil } from './components/Deatil'
import { Error } from './components/Error'
import { Form } from './components/Form'

import { useState } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
   const [characters, setCharacters] = useState([])
   let { pathname } = useLocation()   

   const onSearch = async id => {
      try {
         if(characters.find(character => character.id === parseInt(id, 10))) return
         const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)         
         setCharacters(oldChars => [...oldChars, data])
      } catch({ data, request: { status, statusText }}) {        
         const message = statusText || "Ocurrio un error"
         alert(`Error status: ${status} ${message}`)
      }      
   }

   const onClose = id => {
      let newCharacters = characters.filter(character => character.id !== parseInt(id, 10))
      setCharacters(newCharacters)
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Deatil/>}/>
            <Route path='/error' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
