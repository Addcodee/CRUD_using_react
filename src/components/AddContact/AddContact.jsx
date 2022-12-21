// import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import './AddContact.css'

const AddContact = ({ handleContact, cont }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAdd = () => {
    if (!name || !number || !img || !email) {
      alert("Заполните поля");
      return;
    }
    const newContact = {
      name: name,
      number: number,
      img: img,
      email: email,
      id: Date.now(),
    };

    handleContact(newContact);

    setName("");
    setNumber("");
    setImg("");
    setEmail("");
  };
  // console.log(cont)
  return (
    <div>
      <div className="d-flex justify-content-center">
      <form action="" className="d-flex flex-column inps text-center">
        <h2>Add Contact</h2>
        <input
          className="mb-2"
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Name..."
        />
        <input
          className="mb-2"
          value={number}
          onChange={handleNumber}
          type="text"
          placeholder="Number..."
        />
        <input
          className="mb-2"
          value={img}
          onChange={handleImg}
          type="text"
          placeholder="Img URL..."
        />
        <input
          className="mb-2"
          value={email}
          onChange={handleEmail}
          type="text"
          placeholder="example@yahoo.com"
        />
        <button type="button" className="btn btn-dark" onClick={handleAdd}>Create</button>
      </form>
      </div>
    </div>
  );
};

export default AddContact;
