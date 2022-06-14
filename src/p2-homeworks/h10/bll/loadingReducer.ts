import {InferActionsTypes} from "./store";

const initState = {
loading: false
}

type initStateType=typeof initState
type ActionsType= InferActionsTypes<typeof actions>

 // type InferActionsTypes <T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const loadingReducer = (state:initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE-LOADING': {
            return {...state, loading: action.isLoading}
        }
        default: return state
    }
}
export const actions={
    loadingAC : (isLoading:boolean) => ({type: 'TOGGLE-LOADING', isLoading} as const)
}

export const startDownloadTC = () => (dispatch:(ac:ActionsType)=>void)=>{
    dispatch(actions.loadingAC(true))
    console.log('loading...')
    setTimeout(()=>{
        dispatch(actions.loadingAC(false))
    },2000)
}
  

