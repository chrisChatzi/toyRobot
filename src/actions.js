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
//place robot
export const place_robot = (coord, face, arr) => {
    return {
        type: "PLACE_ROBOT",
        coord, face, arr
    };
};