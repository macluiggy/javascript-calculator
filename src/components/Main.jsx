import React from 'react';
import '../scss/main.scss'

import btns from './buttonsArray.js';
const Main = () => 
			<div className='container'>
				<div className='calculatorContainer'>
					<div id='display'>
						
					</div>
					<div className='buttons'>
						{btns.map((btn, i) => <Button key={i} {...btn} />)}
					</div>
				</div>
			</div>


const Button = ({id, value}) => 
				<button id={id}>
					{value}
				</button>
export default Main;