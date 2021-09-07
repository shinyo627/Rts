import {useState, useRef, useEffect} from 'react'

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Gregg', age: 25},
  {name: 'Michael', age: 26},
]

const UserSearch: React.FC = () => {
const inputRef = useRef<HTMLInputElement | null>(null);
 const [name, setName] = useState('');
 const [user, setUser] = useState< {name: string, age: number} | undefined >()

useEffect(() => {
  if(!inputRef.current) {
    return;
  }

  inputRef.current.focus()
  console.log('hi')
}, [])


 const clickHandler = () => {
  const foundUser = users.find((user) => {
    return user.name.toLowerCase() === name
  })

  setUser(foundUser);
}

  return (
    <div>
      User Search
    <input type="text" 
      ref={inputRef}
      onChange={e => setName(e.target.value)} />
    <button onClick={clickHandler}>Find User</button>

    <div>
      {user && user.name}
      {user && user.age}
    </div>
    </div>
  )
}

export default UserSearch