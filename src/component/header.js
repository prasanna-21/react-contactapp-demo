import React from "react";

const Header = (props) => {
  const handleClick = () => {
    props.history.push("/contacts");
  };
  return (
    <div className="container ">
      <h2>Contacts</h2>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Here..
      </button>
    </div>
  );
};

export default Header;
