import {UserType} from "../HW8";

export type ActionsType = {
    type: string
    payload: string
}



export const homeWorkReducer = (state: Array<UserType>, action: ActionsType):Array<UserType> => {
    switch (action.type) {
        case 'sort':

            return [...state.sort((a, b) =>
                action.payload === 'up' ?
                    a.age - b.age
                    : action.payload === 'down' ?
                        b.age - a.age
                        : 0)]

        case 'check':

            return state.filter((item)=>action.payload!=='all'?item.age===Number(action.payload):true)

        default:
            return state
    }
}