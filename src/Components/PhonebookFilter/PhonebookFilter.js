import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styles from "./PhonebookFilter.module.css";

const PhonebookFilter = ({ valueFilter, changeFilter, showFilter }) => {
  return (
    <CSSTransition
      in={showFilter}
      // appear={true}
      classNames={styles}
      timeout={250}
      unmountOnExit
      unmountOnEnter
    >
      <div className="filter">
        <label>
          Find contact by name
          <br />
          <input
            type="text"
            value={valueFilter}
            onChange={(e) => changeFilter(e.target.value)}
          />
        </label>
      </div>
    </CSSTransition>
  );
};

export default PhonebookFilter;

PhonebookFilter.propTypes = {
  valueFilter: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
