import React, {Component} from 'react';

class Navbar extends Component {
  render() { 
    return (
    <nav className="navbar">
  		<a href="/" className="navbar-brand">Chatty</a>
		<h2>{this.props.connections} Users Online</h2>
	</nav>
      
    );
  }
}
export default Navbar;
