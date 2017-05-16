/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'

function mapStateToProps(state) {
	return {
	};
}

function mapDispatchToProps(dispatch) {
	return {
		
	};
}

class Main extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		let array = []
		for(let i=1; i<16; i++) array.push(i)
		this.state = { table : array }
	}

	componentDidMount(e) {
		let cells = document.getElementsByClassName("cell");
		let w = cells[0].offsetWidth;
		console.log(w)
		for(let i=0; i<cells.length; i++){
			((x) => {
				cells[x].style.height = w + "px";
				cells[x].style.lineHeight = w + "px";
			})(i)
		}
	}
	componentWillUnmount() {
		
	}

	render() {	
		return (
			<div>
				<MainC table={this.state.table} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);