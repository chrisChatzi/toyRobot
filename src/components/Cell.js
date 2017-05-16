import React, { PropTypes } from 'react'

const Cell = ( { idx, col, row, coord, face } ) => (
	<div id={"box"+idx} className="cell">
		{(row == coord[0] && col == coord[1]) ?
			<div className="circle">
				<div className={"nose "+face}></div>
			</div>
		: "" }
	</div>
)

export default Cell