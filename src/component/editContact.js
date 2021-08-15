import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../redux/actions/contactAction";

const EditContact = (props) => {
  const getcontact = useSelector((state) => state.contact);

  const { id, name, email, phoneNum } = getcontact;
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: name,
    email: email,
    phoneNum: phoneNum,
  });

  const handleChange = (name, value) => {
    const prevContact = { ...contact };
    prevContact[name] = value;
    setContact(prevContact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/contacts");
    dispatch(updateContact(id, contact));
    setContact({ name: "", email: "", phoneNum: "" });
  };

  return (
    <div className="container">
      <h2>Update contact</h2>
      <form onSubmit={handleSubmit}>
        <div className=" form-group row mb-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name.."
              value={contact.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
        </div>
        <div className=" form-group row mb-3">
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email.."
              value={contact.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="gorm-group row mb-3">
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              placeholder="Enter number.."
              value={contact.phoneNum}
              onChange={(e) => handleChange("phoneNum", e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
