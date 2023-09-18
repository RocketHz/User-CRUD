
const UserCard = ({ user, deleteUser, setInfoUpdate }) => {

    const handleDelete = () => { 
        deleteUser('/users', user.id)
     }
    const handleEdit = () => { 
        setInfoUpdate(user)
     }

    return (
    <article className="card">
      <h3 className="card__title">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <ul>
        <li className="card__subtitle"><span>Email: </span><span>{user.email}</span></li>
        <li className="card__subtitle"><span>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <div className="card__wrapper">
        <button className="card__btn" onClick={handleDelete}>Delete</button>
        <button className="card__btn" onClick={handleEdit}>Edit</button>
      </div>
    </article>
  )
}

export default UserCard