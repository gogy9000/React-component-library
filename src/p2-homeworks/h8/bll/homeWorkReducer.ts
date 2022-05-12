import {UserType} from "../HW8";

type ActionsType = {
    type: string
    payload: string
}



export const homeWorkReducer = (state: Array<UserType>, action: ActionsType) => {
    switch (action.type) {
        case 'sort': {

            return [...state.sort((a, b) =>
                action.payload === 'up' ?
                    a.age - b.age
                    : action.payload === 'down' ?
                        b.age - a.age
                        : 0)]
        }
        case 'check': {
            // need to fix
            return state
        }
        default:
            return state
    }
}