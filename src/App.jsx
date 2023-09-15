// import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'

function App() {

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  }, [])
  
  return (
    <div>
      <h1>Users CRUD</h1>
      <FormUser 
        
      />
    </div>
  )
}

export default App
