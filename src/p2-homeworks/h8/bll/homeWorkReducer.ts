import {UserType} from "../HW8";

type ActionsType={
    type:string
    payload:string
}

type HomeWorkReducerType={
    state:Array<UserType>

}

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType) => { // need to fix any
    switch (action.type) {
        case 'sort': {

            return state.reduce((acc:Array<UserType>,item:UserType)=>{

                return [...acc]
            },[])
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}