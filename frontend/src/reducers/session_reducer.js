import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';


export default function(state = {}, action){
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAutheniticated: false,
                user: undefined
            };
        default:
            return state;
    }
}