import React, { PropTypes } from 'react'
import Cell from './Cell.js'

const Main = ( { coord, face, table, cmd, inputType, changeInput, keyPress } ) => (
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
			<h3>Command line</h3>
			<div className="command">
				<div className="bot">
					<input placeholder="Type commands" value={cmd} 
						onChange={changeInput} onKeyUp={keyPress} />
				</div>
				<div className="info">
					<p>PLACE X,Y,F: Places the robot at the X,Y point F facing 
						North,East,West,South or just N,E,W,S
						<br/>
						Acceptable range of points are 0&lt;=p&lt;=4
						<br/>
						e.g.: PLACE 0,0,S or place 0,0,west or place 0,0,w
					</p>
					<p>MOVE: Moves robot forward</p>
					<p>LEFT: Changes direction of robot (not moving it)</p>
					<p>RIGHT: Changes direction of robot (not moving it)</p>
				</div>
			</div>
		</div>
	</div>
)

export default Main