export const UPDATE_MESSAGE = 'update-message';
export const ADD_MESSAGE = 'add-message';

// these are action creator functions which update state in the store

export function updateMessage(message) {
	return { type: UPDATE_MESSAGE, message };
}

export function addMessage() {
	return { type: ADD_MESSAGE };
}