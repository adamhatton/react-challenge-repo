import React, { Component } from 'react'
import NavBarChild from './NavBarChild'
import css from "./css/NavBarForm.module.css"

class NavBarForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true,
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
        return {
            isLoggedIn: prevState.isLoggedIn === true ? false : true
        }

    });
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <NavBarChild 
            isLoggedIn={this.state.isLoggedIn}
            handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default NavBarForm