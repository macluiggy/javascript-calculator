const initialState = {
	displayInput: 0,
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'one':
			return {
				...state,
			}
		default:
			return state;

	}
}

export default reducer;