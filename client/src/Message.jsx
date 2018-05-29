import React, {Component} from 'react';

class Message extends Component {
  render() {

  	const cssStyle = {
  		color: this.props.message.userColor
  	}



    return (
    <div className="message">
	    <span className="message-username" style={cssStyle}>{this.props.message.username}</span>
    return (
    <div className="message">
	    <span className="message-username">{this.props.message.username}</span>
	    <span className="message-content">{this.props.message.content}</span>
    </div>
    );
  }
}
export default Message;

