import React, { PropTypes } from 'react'
import Cell from './Cell.js'
import Actions from './Actions.js'

const Main = ( { coord, face, cmd, inputType, changeInput, keyPress } ) => (
	<div className="main">
		<div className="table">
			{[4,3,2,1,0].map( (vCol, iCol) =>
				[4,3,2,1,0].map( (vRow, iRow) =>
					<Cell key={iCol+"-"+iRow} idx={iCol+"-"+iRow} 
					col={vCol} row={vRow} coord={coord} face={face} />
				)
			)}
		</div>
		<div className="action">
			<Actions cmd={cmd} changeInput={changeInput} keyPress={keyPress} />
		</div>
	</div>
)

export default Main