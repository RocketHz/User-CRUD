
const Modal = ({ closeModal, formulario }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Create New User</h2>
          {formulario}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };

export default Modal