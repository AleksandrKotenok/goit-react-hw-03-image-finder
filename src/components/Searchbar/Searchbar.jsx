import React, { Component } from "react";
import { toast } from "react-toastify";
import s from "../Searchbar/Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  searchChange = (event) => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("Enter the name of the pictures or photos!");
      this.setState({
        query: "",
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>
          <input className={s.input} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" value={this.state.search} onChange={this.searchChange} />
        </form>
      </header>
    );
  }
}
