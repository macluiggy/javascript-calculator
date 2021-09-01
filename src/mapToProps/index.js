export const mapStateToProps = state => {
	return {
		state: state,
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		updateInputDisplay: input => dispatch({
			 type: 'UPDATE_INPUT',
			 payload: input,
		}),
		displayResult: () => dispatch({
			type: 'DISPLAY_RESULT',
		}),
		clearInputDisplay: () => dispatch({
			type: 'CLEAR_INPUT',
		})
	}
}