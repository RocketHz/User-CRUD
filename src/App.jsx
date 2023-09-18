import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)
  
  return (
    <>
      <div className='container__form'>
      <h1 className='title'>Users CRUD</h1>
        <FormUser 
          createUser={createUser}
          infoUpdate={infoUpdate}
          updateUser={updateUser}
          setInfoUpdate={setInfoUpdate}
        />
      </div>
      <div className='container__user'>
        {
          users?.map((user) =>  (
          <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
            />)
          )}
      </div>
    </>
  )
}

export default App
