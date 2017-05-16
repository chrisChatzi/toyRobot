import React, { PropTypes } from 'react'
import Cell from './Cell.js'

const Main = ( {table} ) => (
	<div className="main">
		<div className="table">
			{table.map( (v,i) =>
				<Cell key={i} idx={i} val={v} />
			)}
		</div>
		<div className="action">
			<h3>Choose input method</h3>
			<div className="command">
				<div className="div active">
					<div className="top">Command line</div>
					<div className="bot">
						<input placeholder="Type commands" />
					</div>
				</div>
				<div className="info">
					<p>PLACE X,Y,F: Places the robot at the X,Y point F facing 
						North,East,West,South or just N,E,W,S
						<br/>
						Acceptable range of points are 0&lt;=p&lt;=5
						<br/>
						e.g.: PLACE 0,0,S or place 0,0,west or place 0,0,w
					</p>
					<p>MOVE: Moves robot forward</p>
					<p>LEFT: Changes direction of robot (not moving it)</p>
					<p>RIGHT: Changes direction of robot (not moving it)</p>
				</div>
			</div>
			<div className="keyboard">
				<div className="div">
					<div className="top">Press keys</div>
					<div className="bot">
						<button className="key">&larr;</button>
						<button className="key">&uarr;</button>
						<button className="key">&rarr;</button>
					</div>
				</div>
				<div className="info">
					<p>
						Enable it and press Enter to set the robot to 0,0 South West most 
						corner facing North.
						<br/>
						Then press &uarr; Up arrow to move and &larr; Left and &rarr; Right arrows 
						to change direction
					</p>
				</div>
			</div>
		</div>
	</div>
)

export default Main