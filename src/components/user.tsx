import React, {useState, useEffect} from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Image, Input } from '@chakra-ui/react'

// interface UserProps {
//     name: string,
//     username: string,
//     email: string,
//     website: string,
//     zipcode: string,
//     suite: string,
//     countryName: string,
//     city: string,
// }

const User = ()  => {
    const [users, setUsers] = useState([] as any[])
    const [value, setValue] = useState('')
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value) 

    useEffect(() => {
        async function fetchData() {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          res
            .json()
            .then(res => setUsers(res))
            .catch(err => console.log(err));
        }
    
        fetchData();
      }, []);
      console.log(users)
  return (
    <div>
        <div>
        <Input
        value={value}
        onChange={handleChange}
        placeholder='search by name'
        focusBorderColor='blue.300'
        size='lg'
        width='50%'
      />
       <Input
        value={value}
        onChange={handleChange}
        placeholder='search by tag'
        focusBorderColor='blue.300'
        size='lg'
        width='50%'
      />
        </div>
     { users.map(user => (
         <div>
        <AddIcon w={4} h={4} />
        <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
         <h1>{user.name}</h1>
         <h6>Username: {user.username}</h6>
         <h6>Email: {user.email}</h6>
         <h6>Website: {user.website}</h6>
         <h6>Company Name: {user.company.name}</h6>
         <div>
         <h6>Street: {user.address.street}</h6>
         <h6>Suite: {user.address.suite}</h6>
         <h6>City: {user.address.city}</h6>
         <h6>Zipcode: {user.address.zipcode}</h6>
         </div>
         </div>
     ) )}
    </div>
  )
}

export default User