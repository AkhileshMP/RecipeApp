import { Constants } from './../common';

const types = {
    SET_SELECTED_VALUES: 'SET_SELECTED_VALUES',
    ADD_RECIPE: 'ADD_RECIPE',
    UPDATE_RECIPE: 'UPDATE_RECIPE',
    ADD_FAVOURITE_RECIPE: 'ADD_FAVOURITE_RECIPE',
    REMOVE_FAVOURITE_RECIPE: 'REMOVE_FAVOURITE_RECIPE',
    SELECTED_RECIPE: 'SELECTED_RECIPE'
}

export const actions = {
    addRecipe: (list) => {
        return({type: types.ADD_RECIPE, recipe: list});
    },
    updateRecipe: (list) => {
        return({type: types.UPDATE_RECIPE, recipe: list});
    },
    addToFav: (list) => {
        return({type: types.ADD_FAVOURITE_RECIPE, favourites: list});
    },
    removeFromFav: (id, list) => {
        return({type: types.REMOVE_FAVOURITE_RECIPE, favourites: list.filter(item => (item.id != id))});
    },
    selectRecipe: (item) => {
        return({type: types.SELECTED_RECIPE, item});
    }
}

const initialState = {
    recipe: Constants.recipes,
    favourites: [],
    selectedRecipe: null
};

export const reducer = (state = initialState, action) => {
    const {type, favourites, recipe, item} = action;
    switch (type) {
        case types.ADD_RECIPE:
            return { ...state, recipe };
        case types.UPDATE_RECIPE:
            return { ...state, recipe };
        case types.ADD_FAVOURITE_RECIPE:
            return { ...state, favourites };
        case types.REMOVE_FAVOURITE_RECIPE:
            return { ...state, favourites };
        case types.SELECTED_RECIPE:
            return { ...state, selectedRecipe: item };
        default:
            return state;
    }
}