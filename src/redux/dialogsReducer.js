// action type

const ADD_MESSAGE = `ADD-MESSAGE`,
	UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`,
	DEL_MESSAGE_VALUE = `DEL-MESSAGE-VALUE`;

// reducer
const initialState = {
	dialogs: [
		{ id: 1, name: `dima`, avatar: `green`, },
		{ id: 2, name: `Alex`, avatar: `red`, },
		{ id: 3, name: `katya`, avatar: `yellow`, },
		{ id: 4, name: `sergiy`, avatar: `yellowgreen`, },
		{ id: 5, name: `vasiliy`, avatar: `aqua`, },
		{ id: 6, name: `viktor`, avatar: `violet`, },
	],
	messeges: [
		{ id: 1, message: `Hi`, author: `dima`, },
		{ id: 2, message: `How are you?`, author: `dima`, },
		{ id: 3, message: `I'm fine`, author: `me`, },
		{ id: 4, message: `Yo`, author: `me`, },
	],
	newTextMessage: `Enter your message`,
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			{
				const newMessage = {
					id: state.messeges.length + 1,
					message: state.newTextMessage,
					author: `me`,
				};
				const stateCopy = { ...state };
				stateCopy.messeges = [...state.messeges];

				if (state.newTextMessage !== `Enter your message`) {
					stateCopy.messeges.push(newMessage);
					stateCopy.newTextMessage = `Enter your message`;
				}
				return stateCopy;
			}
		case UPDATE_NEW_MESSAGE_TEXT:
			{
				const stateCopy = { ...state };

				stateCopy.newTextMessage = action.text;
				return stateCopy;
			}
		case DEL_MESSAGE_VALUE:
			{
				const stateCopy = { ...state };
				stateCopy.newTextMessage = ``;
				return stateCopy;
			}
		default:
			return state;
	}

};
//ActionCreation
export const addMessageActionCreation = () => ({ type: ADD_MESSAGE, });
export const updateNewMessageTextActionCreation = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text, });
export const delMessageValueActionCreation = () => ({ type: DEL_MESSAGE_VALUE, });
//-------------------------------------
export default dialogsReducer;