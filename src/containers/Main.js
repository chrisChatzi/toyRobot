/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
import { input_type, move_robot, face_robot, place_robot } from '../actions.js' 

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
		},
		moveRobot: (face) => {
			dispatch(move_robot(face));
		},
		faceRobot: (face, dir) => {
			dispatch(face_robot(face, dir));
		},
		placeRobot: (coord, face, arr) => {
			dispatch(place_robot(coord, face, arr));
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

		this.state = {
			cmd : "",
			error : ""
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
		this.setState({error : ""});
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
					if(!arr[1]) this.setState({error : "place commands needs parameters"});
					else{
						arr2 = arr[1].split(",");
						if(arr2[0] > 4 || arr2[1] > 4 || arr2[0] < 0 || arr2[0] < 0)
							this.setState({error : "X and Y coordinates must be between 0 and 4"});
						else{
							if(arr2.length == 3)
								this.props.placeRobot(
									this.props.coord, 
									this.props.face.toLowerCase()[0], 
									arr2
								);
							else this.setState({error : "place commands needs 3 parameters e.g. 0,0,w"});
						}
					}
				break;
				case "move":
					if(this.props.face.toLowerCase()[0] == "n" && this.props.coord[1] == 4)
						this.setState({error : "robot will fall"});
					if(this.props.face.toLowerCase()[0] == "s" && this.props.coord[1] == 0)
						this.setState({error : "robot will fall"});
					if(this.props.face.toLowerCase()[0] == "w" && this.props.coord[0] == 4)
						this.setState({error : "robot will fall"});
					if(this.props.face.toLowerCase()[0] == "e" && this.props.coord[0] == 0)
						this.setState({error : "robot will fall"});
					this.props.moveRobot(this.props.face.toLowerCase()[0]);
				break;
				case "left":
					this.props.faceRobot(this.props.face.toLowerCase()[0], "left");
				break;
				case "right":
					this.props.faceRobot(this.props.face.toLowerCase()[0], "right");
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
		let { cmd, error } = this.state
		let { changeInput, keyPress, inputType } = this
		return (
			<div>
				<MainC 
				coord={coord} face={face}
				cmd={cmd} error={error}
				changeInput={changeInput} keyPress={keyPress}
				inputType={inputType} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);