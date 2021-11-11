// action type
const ADD_POSTS = `ADD-POSTS`,
	UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`,
	DEL_POST_VALUE = `DEL-POST-VALUE`;



// reducer
const initialState = {
	posts: [
		{ id: 1, message: `Hi, how are you?`, like: '10', },
		{ id: 2, message: `It's my first post`, like: '20', },
	],
	newTextPost: `Enter your post`,
}



const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POSTS:
			const newPost = {
				id: state.posts.length + 1,
				message: state.newTextPost,
				like: 0,
			};
			if (state.newTextPost !== `Enter your post`) {
				state.posts.push(newPost);
				state.newTextPost = `Enter your post`;
			}
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newTextPost = action.text;
			return state;
		case DEL_POST_VALUE:
			state.newTextPost = ``;
			return state;
		default:
			return state;
	}

}
//ActionCreation

export const addPostsActionCreation = () => ({ type: ADD_POSTS, });
export const updateNewPostTextActionCreation = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text, });
export const delPostValueActionCreation = () => ({ type: DEL_POST_VALUE, });

//-------------------------------------
export default profileReducer;