import React from "react";
import { RiCloseFill } from "react-icons/ri";

const Formtable = ({
  handleSubmit,
  handleOnChange,
  setEditSection,
  setAddSection,
  formData,
  isEditForm,
}) => {
  const closeForm = () => {
    if (isEditForm) {
      setEditSection(false);
    } else {
      setAddSection(false);
    }
  };

  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={closeForm}>
          <RiCloseFill />
        </div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleOnChange}
          value={formData.name || ""}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={handleOnChange}
          value={formData.email || ""}
        />

        <label htmlFor="mobile">Phone</label>
        <input
          type="text"
          id="mobile"
          onChange={handleOnChange}
          value={formData.mobile || ""}
        />

        <button className="btn btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default Formtable;
