import * as actionTypes from '../actions/actionTypes';

const initialState = {
    activeList: [],
    lists: [],
    saved: [],
    favorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_LISTS) :
            return {
                ...state,
                lists: action.lists
            }
        case(actionTypes.ADD_LIST) :
            return {
                ...state,
                lists: action.lists
            }
        case(actionTypes.ADD_RECIPE) :
            return {
                ...state,
                activeList: state.activeList.concat(action.recipe)
            }
        case(actionTypes.REMOVE_RECIPE) :
            let newActiveList = [...state.activeList].filter(recipe => recipe.label !== action.recipeName);
            return {
                ...state,
                activeList: newActiveList
            }
        case(actionTypes.GET_SAVED_RECIPES) : 
            return {
                ...state,
                saved: action.saved
            }
        case(actionTypes.SAVE_RECIPE) :
            return {
                ...state,
                saved: action.saved
            }
        case(actionTypes.UNSAVE_RECIPE) :
            return {
                ...state,
                saved: action.saved
            }
        case(actionTypes.GET_FAVORITES) :
            return {
                ...state,
                favorites: action.favorites
            }
        case(actionTypes.FAVORITE) :
            return {
                ...state,
                favorites: action.favorites
            }
        case(actionTypes.UNFAVORITE) :
            return {
                ...state,
                favorites: action.favorites
            }
        case(actionTypes.CLEAR_ACTIVE_LIST) :
            return {
                ...state,
                activeList: []
            }
        case(actionTypes.DELETE_LIST) :
            return {
                ...state,
                lists: action.lists
            }
        default : return state;
    }
}

export default reducer;