import React, { Component } from 'react';
import {} from './style.less';
import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-entry-box';

class App extends Component {
	render() {
		return (
			<div>
				<MessageList messages={this.props.messages}/>
				<MessageEntryBox 
					value={this.props.currentMessage}
					onChange={this.props.updateMessage}
					onSubmit={this.props.addMessage}/>
			</div>
		)
	}
}

export default App;
