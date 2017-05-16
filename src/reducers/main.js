import init from '../initialState'

const state_update = (state = init.main, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case "INPUT_TYPE": {
			newstate.input = action.typ
			return newstate
		}
		case "MOVE_ROBOT": {
			let coord = newstate.coord.slice();
			switch(action.face){
				case "w": if(coord[0] < 4) coord[0] = coord[0]+1; break;
				case "e": if(coord[0] > 0) coord[0] = coord[0]-1; break;
				case "n": if(coord[1] < 4) coord[1] = coord[1]+1; break;
				case "s": if(coord[1] > 0) coord[1] = coord[1]-1; break;
			}
			newstate.coord = coord
			return newstate
		}
		case "FACE_ROBOT": {
			let face = newstate.face;
			let newDir = "";
			switch(action.face){
				case "w": (action.dir == "left") ? newDir = "s" : newDir = "n"; break;
				case "e": (action.dir == "left") ? newDir = "n" : newDir = "s"; break;
				case "n": (action.dir == "left") ? newDir = "w" : newDir = "e"; break;
				case "s": (action.dir == "left") ? newDir = "e" : newDir = "w"; break;
			}
			newstate.face = newDir
			return newstate
		}
		default:
			return state || init.main
	}
}

export default state_update