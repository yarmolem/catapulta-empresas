
import { types } from "./types";

export const AuthReducer = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN:
            return {
                ...action.payload,
                logged: true,
            }
        case types.LOGOUT:
            return {
                logged: false,
            }


        default:
            return state;
    }

}