import React, {Component} from 'react';

class Message extends Component {
  render() {
<<<<<<< HEAD

  	const cssStyle = {
  		color: this.props.message.userColor
  	}



    return (
    <div className="message">
	    <span className="message-username" style={cssStyle}>{this.props.message.username}</span>
=======
    return (
    <div className="message">
	    <span className="message-username">{this.props.message.username}</span>
>>>>>>> 6e3f62a6207494c3f9190dfbcb062dd5b0bb4ae1
	    <span className="message-content">{this.props.message.content}</span>
    </div>
    );
  }
}
export default Message;

