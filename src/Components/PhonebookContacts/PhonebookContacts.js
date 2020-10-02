import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import styles from "./PhonebookContacts.module.css";

const PhonebookContacts = ({ contacts, removeContact }) => {
  return (
    <div className="contacts">
      {/* <CSSTransition classNames={styles} in={true} timeout={250} unmountOnExit>
        <h2 className="contact__title">Contacts</h2>
      </CSSTransition> */}

      <TransitionGroup component="ul">
        {contacts.map((contact) => (
          <CSSTransition classNames={styles} key={contacts.id} timeout={250}>
            <li key={contact.id} className="contact__list">
              <span className="contact__span">
                {contact.name}:
                <a href={`tel:+38${contact.mumber}`}> {contact.number}</a>
              </span>
              <button
                className="contact__btn"
                onClick={() => removeContact(contact.id)}
              >
                x
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PhonebookContacts;

PhonebookContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
