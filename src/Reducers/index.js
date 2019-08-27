import {
	REGISTER_USER_FAILURE,
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	GET_RECIPES_FAILURE,
	GET_RECIPES_START,
	GET_RECIPES_SUCCESS,
	GET_RECIPE_FAILURE,
	GET_RECIPE_START,
	GET_RECIPE_SUCCESS,
	PUT_RECIPE_FAILURE,
	PUT_RECIPE_START,
	PUT_RECIPE_SUCCESS,
	POST_RECIPE_FAILURE,
	POST_RECIPE_START,
	POST_RECIPE_SUCCESS,
	DELETE_RECIPE_FAILURE,
	DELETE_RECIPE_START,
	DELETE_RECIPE_SUCCESS
} from '../Actions'

const initialState = {
	isLoggedIn: false,
	registeringUser: false,
	loggingIn: false,
	synced: false,
	recipe: {},
	allRecipes: []
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER_USER_START:
			return {
				...state,
				registeringUser: true
			}
		case REGISTER_USER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				registeringUser: false,
				isLoggedIn: true
			}
		case REGISTER_USER_FAILURE:
			return {
				...state,
				registeringUser: false,
				error: action.payload
			}
		case LOGIN_USER_START:
			return {
				...state,
				loggingIn: true
			}
		case LOGIN_USER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				loggingIn: false,
				isLoggedIn: true
			}
		case LOGIN_USER_FAILURE:
			return {
				...state,
				loggingIn: false
			}
		case GET_RECIPES_START:
		case GET_RECIPE_START:
		case PUT_RECIPE_START:
		case POST_RECIPE_START:
		case DELETE_RECIPE_START:
			return {
				...state,
				synced: false
			}
		case GET_RECIPES_FAILURE:
		case GET_RECIPE_FAILURE:
		case PUT_RECIPE_FAILURE:
		case POST_RECIPE_FAILURE:
		case DELETE_RECIPE_FAILURE:
			return {
				...state,
				synced: false
			}
		case GET_RECIPES_SUCCESS:
			return {
				...state,
				synced: true,
				allRecipes: action.payload
			}
		case GET_RECIPE_SUCCESS:
			return {
				...state,
				synced: true,
				recipe: action.payload
			}
		case PUT_RECIPE_SUCCESS:
		case POST_RECIPE_SUCCESS:
			return {
				...state,
				synced: true
			}
		case DELETE_RECIPE_SUCCESS:
			return {
				...state,
				synced: true,
				recipe: {}
			}
		default:
			return state
	}
}

export default reducer
