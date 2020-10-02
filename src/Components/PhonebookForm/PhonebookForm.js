import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./PhonebookForm.module.css";

const PhonebookForm = ({ addcontact }) => {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");

  const [form, setForm] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const { name, number } = form;
    e.preventDefault();

    name || number !== "" ? addcontact(name, number) : alert("Введіть дані");

    setForm({ name: "", number: "" });
  };

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <div className="phonebook">
      <CSSTransition
        classNames={styles}
        in={true}
        appear={true}
        timeout={500}
        unmountOnExit
      >
        <h2>Phponebook</h2>
      </CSSTransition>
      <form className="phonebook__form" onSubmit={handleSubmit}>
        <label className="form__title">
          Name <br />
          <input
            className="form__input"
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Name"
            name="name"
            required
          ></input>
        </label>

        <br />
        <label className="form__title">
          Number <br />
          <input
            className="form__input"
            onChange={handleChange}
            value={form.number}
            type="number"
            placeholder="+380"
            name="number"
            required
          ></input>
        </label>

        <br />
        <button className="form__btn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default PhonebookForm;
