import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AlertMessage.module.css";

const AlertMessage = ({ alert }) => {
  return (
    <CSSTransition
      in={alert}
      classNames={styles}
      timeout={400}
      unmountOnEnter
      unmountOnExit
    >
      <div className={styles.alert}>
        <p>Контакт вже збережений</p>
      </div>
    </CSSTransition>
  );
};

export default AlertMessage;
