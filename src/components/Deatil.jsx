import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export const Deatil = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => setCharacter(data))
      .catch(() => navigate('/error'))
    
    return setCharacter({})
  }, [id, navigate])

  return (
    <div>      
      {
        character?.name && 
        <>
          <h3>{character.name}</h3>
          <h3>{character.status}</h3>
          <h3>{character.species}</h3>
          <h3>{character.gender}</h3>
          <h3>{character.origin.name}</h3>
          <img src={character.image} alt={character.name}/>
        </>
      }
    </div>
  )
}