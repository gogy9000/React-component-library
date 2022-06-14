import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {actions} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {
    const state = useSelector((state: AppStoreType) => state.themeReducer)
    const {theme, themes, themeText} = state
    const dispatch = useDispatch()

    const changeTheme = (newTheme: string) => {
        dispatch(actions.changeThemeC(newTheme))
    }
    const changeThemeText = (newThemeText: string) => {
        dispatch(actions.changeThemeTextC(newThemeText))
    }


    return (
        <div className={s[theme]} style={{display: 'flex', gap:10,
            flexDirection: 'column', justifyContent: 'center'}}>
            <hr/>
            <span className={s[themeText + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={changeTheme}
                             style={{width: 100, justifySelf: 'center'}}/>
            </div>
            <div>
                <SuperRadio name={'themes'}
                            options={themes}
                            value={themeText}
                            onChange={(e)=>{
                                changeThemeText(e.currentTarget.value)}}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
