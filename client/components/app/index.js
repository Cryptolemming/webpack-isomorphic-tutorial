import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from './style.less';
import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-entry-box';
import * as messageActionCreators from 'actions/message-actions';

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
		);
	}
}

// injects values from state to the components properties
function mapStateToProps(state) {
	return {
		messages: state.messages,
		currentMessage: state.currentMessage
	};
}

// injects action creator functions into the components properties which dispatch
// returned action objects to the store
function mapDispatchToProps(dispatch) {
	return bindActionCreators(messageActionCreators, dispatch);
}

// create a connector that injects properties and action creators to a component
const connector = connect(mapStateToProps, mapDispatchToProps);

// create a new component from App with the ability to connect to the store
const ConnectedApp = connector(App);

// export the new created App which connects to store
export default ConnectedApp;
