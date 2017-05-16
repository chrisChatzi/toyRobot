import React, { PropTypes } from 'react'

const Actions = ( { cmd, changeInput, keyPress, error, arrow } ) => (
	<div>
		<h3>Command line</h3>
		<div className="command">
			<div className="bot">
				<input placeholder="Type commands" value={cmd} 
					onChange={changeInput} onKeyUp={keyPress} />
			</div>
			<div className="error">{error}</div>
			<div className="keys">
				<button onClick={()=>arrow("left")}>&larr;</button>
				<button onClick={()=>arrow("up")}>&uarr;</button>
				<button onClick={()=>arrow("right")}>&rarr;</button>
			</div>
			<div className="info">
				<p><b>PLACE X,Y,F or place</b>: Places the robot at the X,Y point F facing 
					North,East,West,South or just N,E,W,S
					<br/>
					Acceptable range of points are 0&lt;=p&lt;=4
					<br/>
					e.g.: PLACE 0,0,S or place 0,0,west or place 0,0,w
				</p>
				<p><b>MOVE or move</b>: Moves robot forward</p>
				<p><b>LEFT or left</b>: Changes direction of robot (not moving it)</p>
				<p><b>RIGHT or right</b>: Changes direction of robot (not moving it)</p>
			</div>
		</div>
	</div>
)

export default Actions