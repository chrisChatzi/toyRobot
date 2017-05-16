import { } from './general/logic.js'

export const input_type = (typ) => {
    return {
        type: "INPUT_TYPE",
        typ
    };
};
//move robot
export const move_robot = (face) => {
    return {
        type: "MOVE_ROBOT",
        face
    };
};
//change direction
export const face_robot = (face, dir) => {
    return {
        type: "FACE_ROBOT",
        face, dir
    };
};