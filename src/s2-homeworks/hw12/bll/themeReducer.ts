type ActionsType = ChangeThemeIdACType;

type ThemeStateType = {
    themeId: 1 | 2 | 3;
}

const initState: ThemeStateType = {
    themeId: 1,
};

export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id};

        default:
            return state;
    }
};

type ChangeThemeIdACType = {
    type: 'SET_THEME_ID';
    id: 1 | 2 | 3;
}

export const changeThemeId = (id: 1 | 2 | 3): ChangeThemeIdACType => ({type: 'SET_THEME_ID', id}); // fix any
