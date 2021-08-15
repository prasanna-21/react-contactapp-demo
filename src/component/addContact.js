import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contactAction";

const AddContact = (props) => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNum: "",
  });

  const handleChange = (name, value) => {
    const prevContact = { ...contact };
    prevContact[name] = value;
    setContact(prevContact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contact.name === "" ||
      contact.email === "" ||
      contact.phoneNum === ""
    ) {
      alert("all fields are mandatory");
      return;
    }
    props.history.push("/contacts");
    dispatch(addContact(contact));
    setContact({ name: "", email: "", phoneNum: "" });
  };

  return (
    <div className="container ">
      <h2>Add contact</h2>
      <form onSubmit={handleSubmit}>
        <div className=" form-group row mb-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control "
              placeholder="Enter name.."
              value={contact.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
        </div>
        <div className=" form-group row mb-3">
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              placeholder="enter email.."
              value={contact.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              placeholder="enter number.."
              value={contact.phoneNum}
              onChange={(e) => handleChange("phoneNum", e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
