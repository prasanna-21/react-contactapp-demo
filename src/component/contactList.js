import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllContacts} from "../redux/actions/contactAction";
import { getContact, deleteContact } from "../redux/actions/contactAction";

const ContactList = (props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  // const [query, setQuery] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(searchQuery(query));
  // };
  const handleEdit = (id) => {
    props.history.push("/editContact");
    dispatch(getContact(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  useEffect(() => {
    dispatch(getAllContacts());
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <h2>Contact List</h2>
      {/* <>
        <form
          className="form-inline  mb-3 justify-content-start"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </> */}
      {contacts.length > 0 ? (
        <table className="table  table-hover">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNum}</td>
                  <td>
                    <button
                      className="btn btn-secondary mr-3"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No contacts available...</p>
      )}
    </div>
  );
};

export default ContactList;
