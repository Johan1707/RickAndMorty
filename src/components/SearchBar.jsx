import { useState } from 'react'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('')

   const handleChange = ({ target: { value } }) => setId(value)

   return (
      <div>
         <input 
            type='search'
            value={id}
            onChange={handleChange}
         />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
