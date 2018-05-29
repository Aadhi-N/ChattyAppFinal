import React, {Component} from 'react';

class Chatbar extends Component {
  
  state = {currentMessage : "", username: ""};

  render() {

  	const onChange = event => {
      this.setState({currentMessage: event.target.value})
  	}

    const onUserChange = event => {
      this.setState({username: event.target.value})
    }

  	const handleEnter = event => {
  		if (event.key == 'Enter') {
  			event.preventDefault();
  			const newMessage = this.state.currentMessage
        const newUser = this.state.username
        this.props.addMessage(newMessage, newUser);
  			this.setState({currentMessage: ""})
  		}
  	}

    const handleUserEnter = event => {
      console.log('test')
      if (event.key == 'Enter') {
        event.preventDefault();
        const editUser = this.state.username;
        this.props.addMessage(null, null, editUser);
        console.log(editUser)
      }
    }

    return (
    <footer className="chatbar">
  	  <input className="chatbar-username" onChange={onUserChange} onKeyPress={handleUserEnter} placeholder="Your Name (Optional)" value={this.state.username}/>
  	  <input className="chatbar-message" onChange={onChange} onKeyPress={handleEnter} value={this.state.currentMessage} placeholder="Type a message and hit ENTER" name="newMessage" type="text" />
    </footer>
    );
  }
}
export default Chatbar;

