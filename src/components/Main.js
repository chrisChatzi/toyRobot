import React, { PropTypes } from 'react'
import Cell from './Cell.js'

const Main = ( {table} ) => (
	<div className="main">
		<div className="table">
			{table.map( (v,i) =>
				<Cell key={i} idx={i} val={v} />
			)}
		</div>
	</div>
)

export default Main