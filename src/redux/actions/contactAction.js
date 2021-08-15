export const getAllContacts = () => {
  return {
    type: "ALL_CONTACTS",
  };
};

export const addContact = (contact) => {
  const { name, email, phoneNum } = contact;
  return {
    type: "ADD_CONTACT",
    payload: {
      name,
      email,
      phoneNum,
    },
  };
};

export const updateContact = (id, contact) => {
  return {
    type: "UPDATE_CONTACT",
    payload: {
      id,
      contact,
    },
  };
};
export const getContact = (id) => {
  return {
    type: "GET_CONTACT",
    payload: {
      id,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: {
      id,
    },
  };
};

export const searchQuery = (query) => {
  return {
    type: "SEARCH_CONTACTS",
    payload: {
      query,
    },
  };
};
