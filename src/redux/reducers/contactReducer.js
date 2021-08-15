const initialState = {
  contacts: [{ name: "tech", email: "tech@gmail.com", phoneNum: 123456789 }],
  contact: {},
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT":
      let oldcontacts = [...state.contacts];
      oldcontacts.push(action.payload);
      return { ...state, contacts: oldcontacts };
    case "UPDATE_CONTACT":
      let prevContacts = [...state.contacts];
      prevContacts[action.payload.id] = action.payload.contact;
      return { ...state, contacts: prevContacts };
    case "GET_CONTACT":
      return {
        ...state,
        contact: {
          id: action.payload.id,
          ...state.contacts[action.payload.id],
        },
      };
    case "DELETE_CONTACT":
      let preContacts = [...state.contacts];
      preContacts.splice(action.payload.id, 1);
      return { ...state, contacts: preContacts };

    case "SEARCH_CONTACTS":
      if (action.payload.query !== "") {
        let newContacts = state.contacts.filter((contact) => {
          return Object.values(contact)
            .join("")
            .toLowerCase()
            .includes(action.payload.query.toLowerCase());
        });

        return { ...state, contacts: newContacts };
      } else return { ...state };
    default:
      return state;
  }
};

export default contactReducer;
