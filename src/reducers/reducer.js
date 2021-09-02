const initialState = {
	displayInput: '6*0o4',
}
const reducer = (state=initialState, action) => {
	switch (action.type) {
		case 'UPDATE_INPUT':
			return {
				...state,
				displayInput: [state.displayInput]
								.concat([action.payload])
								.join('')
								.replace(/^0/, '')
								.replace(/[\W](?=\W*[\W])/g, '')
								//.replace(/[^\d0]*/g)
								//.replace(/(\W0[1-9]$)/g, '')
			}
		case 'DISPLAY_RESULT':
			return {
				...state,
				displayInput: eval(state.displayInput),

			}
		case 'CLEAR_INPUT':
			return {
				...state,
				displayInput: 0,
			}
		default:
			return state;

	}
}

export default reducer;