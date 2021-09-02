const initialState = {
	displayInput: 0,
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
								//.replace(/(?!\W)0+(?=[1-9]*[1-9]$)/g, '')
								.replace(/\W0+(?=[1-9]*[1-9]$)/g, x => x.match(/\W/g))
								.replace(/\W+(?=\W)/g, '')
								//.replace(/[^\d0]*/g)
								//.replace(/(\W0[1-9]$)/g, '')
			}
		case 'DISPLAY_RESULT':
			return {
				...state,
				displayInput: eval(state
									.displayInput
									.replace(/\W$/, '')),

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