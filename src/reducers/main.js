import init from '../initialState'

const state_update = (state = init.main, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case "INPUT_TYPE": {
			newstate.input = action.typ
			return newstate
		}
		default:
			return state || init.main
	}
}

export default state_update