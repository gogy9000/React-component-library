import {InferActionsTypes} from "../../h10/bll/store";

enum Types {
    ChangeTheme='CHANGE-THEME',
    ChangeThemeText='CHANGE-THEME-TEXT'
}

const initState = {
    themes :['dark', 'red', 'some','primary','secondary'],
    theme:'some',
    themeText:'some'
};

type initStateType=typeof initState
type ActionsType= InferActionsTypes<typeof actions>
export const themeReducer = (state: initStateType = initState , action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case Types.ChangeTheme:
            return {...state, theme: action.newTheme};
        case Types.ChangeThemeText:
            return {...state, themeText: action.newThemeText}

        default: return state;
    }
};

export const actions= {
    changeThemeC : (newTheme: string) => ({type: Types.ChangeTheme, newTheme}as const),
    changeThemeTextC : (newThemeText: string) => ({type: Types.ChangeThemeText, newThemeText}as const),

}