import React, { Component } from 'react';

class MessageEntryBox extends Component {
	handleChange(ev) {
		this.props.onChange(ev.target.value);
	}

	handleKeyPress(ev) {
		if (ev.which === 13) {
			this.props.onSubmit();
			ev.preventDefault();
		}
	}

	render() {
		return (
			<div className='message-entry-box'>
				<textarea
					name='message'
					value={this.props.value}
					onChange={this.handleChange.bind(this)}
					onKeyPress={this.handleKeyPress.bind(this)}/>
			</div>
		);
	}
}

export default MessageEntryBox;