import { Link } from 'react-router-dom'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div>
         {<button onClick={() => onClose(id)}>X</button>}         
         <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
         </Link>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3>
         {<img src={image} alt={name} />}
      </div>
   );
}
