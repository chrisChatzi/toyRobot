import React, { PropTypes } from 'react'

const Cell = ( {idx, val} ) => (
	<div id={"box"+idx} className="cell">
		{val}
	</div>
)

export default Cell