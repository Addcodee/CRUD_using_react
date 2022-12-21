import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditModal from "../../EditModal/EditModal";
import AddContact from "../AddContact/AddContact";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const [modal, setModal] = useState(false);

  const [editContact, setEditContact] = useState({});

  function handleContact(newObj) {
    const newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
  }

  function handleDelete(id) {
    const newContacts = contacts.filter((item) => item.id !== id);

    setContacts(newContacts);
  }

  function handleEdit(index) {
    setModal(true);
    setEditContact(contacts[index]);
  }

  function handleEditClose() {
    setModal(false);
  }

  function handleSaveEdit(newContact) {
    const newContacts = contacts.map((item) => {
      // console.log(newContact);
      // console.log(item);
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContacts);
    handleEditClose();
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Contacts
                contacts={contacts}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleSaveEdit={handleSaveEdit}
              />
            }
          />
          <Route
            path="add-contact"
            element={
              <AddContact
                handleContact={handleContact}
                cont={contacts}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {modal ? (
        <EditModal
          editContact={editContact}
          handleEditClose={handleEditClose}
          handleSaveEdit={handleSaveEdit}
        />
      ) : null}
    </div>
  );
};

export default ContactList;
