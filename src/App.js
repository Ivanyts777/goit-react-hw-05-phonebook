import React, { Component } from "react";
import PhonebookForm from "./Components/PhonebookForm/PhonebookForm";
import PhonebookContacts from "./Components/PhonebookContacts/PhonebookContacts";
import PhonebookFilter from "./Components/PhonebookFilter/PhonebookFilter";
import AllertMessage from "./Components/AllertMessage/AlertMessage";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    alert: false,
  };

  componentDidUpdate(prevState) {
    prevState.contacts !== this.state.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    const persistedTasks = localStorage.getItem("contacts");
    persistedTasks &&
      this.setState({
        contacts: JSON.parse(persistedTasks),
      });
  }

  addcontact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const checkContactName = this.state.contacts.find(
      (contact) => contact.name === name
    );

    if (!checkContactName) {
      this.setState((state) => ({
        contacts: [...state.contacts, contact],
      }));
    } else {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 4000);
    }
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (id) => {
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter, alert } = this.state;
    const filterMasyv = this.filterContact();
    return (
      <div className="fhonebook">
        <AllertMessage alert={alert} />

        <PhonebookForm addcontact={this.addcontact} />

        <PhonebookFilter
          valueFilter={filter}
          changeFilter={this.changeFilter}
          showFilter={contacts.length > 1}
        />

        <PhonebookContacts
          contacts={filterMasyv}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
