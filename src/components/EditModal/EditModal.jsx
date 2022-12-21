import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({
  handleClose,
  editContact,
  handleSaveEdit,
}) => {
  const [item, setItem] = useState(editContact);

  // console.log(item)

  function handleEditName(e) {
    let newObj = { ...item };

    newObj.name = e.target.value;

    setItem(newObj);
  }
  function handleEditNumber(e) {
    let newObj = { ...item };

    newObj.number = e.target.value;

    setItem(newObj);
  }
  function handleEditImg(e) {
    let newObj = { ...item };

    newObj.img = e.target.value;

    setItem(newObj);
  }
  function handleEditEmail(e) {
    let newObj = { ...item };

    newObj.email = e.target.value;

    setItem(newObj);
  }

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button
            className="btn-close"
            onClick={() => handleClose()}
          ></button>
        </div>
        <form
          action=""
          className="d-flex flex-column text-center edit-inps"
        >
          <h2>Edit Contact</h2>
          <input
            className="mb-2"
            value={item.name}
            onChange={handleEditName}
            type="text"
          />
          <input
            className="mb-2"
            value={item.number}
            onChange={handleEditNumber}
            type="text"
          />
          <input
            className="mb-2"
            value={item.img}
            onChange={handleEditImg}
            type="text"
          />
          <input
            className="mb-2"
            value={item.email}
            onChange={handleEditEmail}
            type="text"
          />
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => handleSaveEdit(item)}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
