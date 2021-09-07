import { useState } from 'react';

const GuestList: React.FC = () => {
const [name, setName] = useState('')
const [guests, setGuests] = useState<string[]>([])

const clickHandler = () => {
  setName('');
  setGuests([...guests, name]);
}

  return (
    <div>
     <h3>Guest List</h3> 
    
    <ul>
      {guests.map(guest => (
      <li key={guest}>{guest}</li>
       )
      )}
    </ul>
     <input type="text" 
     value={name} 
     onChange={(e) => setName(e.target.value)}/>
     <button onClick={clickHandler}>Add Guest</button>
    </div>
  )
}

export default GuestList