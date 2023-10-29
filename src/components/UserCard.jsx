const UserCard = ({ user, deleteUser, setInfoUpdate }) => {
  const handleDelete = () => {
    deleteUser("/users", user.id);
  };
  const handleEdit = () => {
    setInfoUpdate(user);
  };

  return (
    <article className="card">
      <h3 className="card__title">
        #{`${user.id} ${user.first_name} ${user.last_name}`}
      </h3>
      <ul>
        <li className="card__subtitle">
          <span>Email: </span>
          <span>{user.email}</span>
        </li>
        <li className="card__subtitle">
          <span>Birthday: </span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <div className="card__wrapper">
        <button className="button" onClick={handleDelete}>
          <svg viewBox="0 0 448 512" className="svgIcon">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>
        <button className="button button-update" onClick={handleEdit}>
          <svg
            viewBox="0 0 48 48"
            className="svgIcon"
          >
            <mask id="IconifyId18b78c63aabee95dd0">
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path
                  fill="#fff"
                  stroke="#fff"
                  d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                />
                <path
                  stroke="#000"
                  d="M33.542 27c-1.274 4.057-5.064 7-9.542 7c-4.477 0-8.268-2.943-9.542-7v6m19.084-18v6c-1.274-4.057-5.064-7-9.542-7c-4.477 0-8.268 2.943-9.542 7"
                />
              </g>
            </mask>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#IconifyId18b78c63aabee95dd0)"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
