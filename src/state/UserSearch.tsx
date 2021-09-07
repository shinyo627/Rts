import {useState} from 'react'

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Gregg', age: 25},
  {name: 'Michael', age: 26},
]

const UserSearch: React.FC = () => {
 const [name, setName] = useState('')
 const [user, setUser] = useState< {name: string, age: number} | undefined >()

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
    name={name} 
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