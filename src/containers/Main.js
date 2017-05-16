/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
import { input_type } from '../actions.js' 

function mapStateToProps(state) {
	return {
		coord : state.main.coord,
		face : state.main.face,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		inputType: (type) => {
			dispatch(input_type(type));
		}
	};
}

class Main extends Component {
	static get propTypes() {
		return {
			
		}
	}

	constructor(props) {
		super(props);
		//cells
		let array = []
		for(let i=1; i<=25; i++) array.push("")
		this.state = {
			table : array,		//table where robot moves
			cmd : "",			//command input txt
		}
		//events
		this.changeInput = this.changeInputH.bind(this)
		this.keyPress = this.keyPressH.bind(this)
		this.inputType = this.inputTypeH.bind(this)
	}

	componentDidMount(e) {
		//set height of cells
		let cells = document.getElementsByClassName("cell");
		let w = cells[0].offsetWidth;
		for(let i=0; i<cells.length; i++){
			((x) => {
				cells[x].style.height = w + "px";
				cells[x].style.lineHeight = w + "px";
			})(i)
		}
	}
	componentWillUnmount() {
		
	}

	//catch keypress
	changeInputH(e){
		let val = e.target.value;
		this.setState({cmd : val});
	}
	keyPressH(e){
		if(e.keyCode == 13){
			let val = this.state.cmd;
			let arr = val.split(" ");
			let arr2 = [];
			switch(arr[0].toLowerCase()){
				case "place":
					arr2 = arr[1].split(",");
					console.log(arr2[0])
					console.log(arr2[1])
					console.log(arr2[2])
				break;
				case "move":
					console.log("go")
				break;
				case "left":
					console.log('l')
				break;
				case "right":
					console.log('r')
				break;
			}
		}
	}
	//change input type
	inputTypeH(type){
		this.props.inputType(type);
	}

	render() {
		let { coord, face } = this.props
		let { table, cmd } = this.state
		let { changeInput, keyPress, inputType } = this
		return (
			<div>
				<MainC 
				coord={coord} face={face}
				table={table} cmd={cmd}
				changeInput={changeInput} keyPress={keyPress}
				inputType={inputType} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);