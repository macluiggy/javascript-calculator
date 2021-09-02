import React from 'react';
import '../scss/main.scss'
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/';
import { connect } from 'react-redux';
import btns from './buttonsArray.js';
const Main = ({ state, updateInputDisplay, displayResult, clearInputDisplay }) => 
{
	const { displayInput } = state.inputState;
	console.log(eval('8 + 5'))
	return (
		<div className='container'>
			<div className='calculatorContainer'>
				<div id='display'>
					{ displayInput }
				</div>
				<div className='buttons'>
					{btns.map((btn, i) =>
							 <Button
							  key={i}
							  {...btn}
							  updateInputDisplay={updateInputDisplay}
							  displayResult={displayResult}
							  clearInputDisplay={clearInputDisplay}
							   />)}
				</div>
			</div>
		</div>
		)
}

console.log(8*3)
const Button = ({ 
				id, 
				value, 
				updateInputDisplay, 
				displayResult ,
				clearInputDisplay,
			}) => 
				<button
				 id={id}
				 onClick={(e) => {
				 	if (value === '=') {
				 		return displayResult()
				 	} else if (value === 'ac') {
				 		return clearInputDisplay()
				 	}
				 	return updateInputDisplay(value)
				 }} >
					{value}
				</button>
export default connect(mapStateToProps, mapDispatchToProps)(Main)