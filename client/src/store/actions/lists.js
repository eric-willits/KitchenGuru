import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import { tokenConfig } from './auth';


export const getLists = () => (dispatch, getState) => {
    axios
        .get("/api/lists", tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.GET_LISTS,
                    lists: res.data
                })
            })
}

export const addList = list => (dispatch, getState) => {
    axios
        .put("/api/lists/addlist", list, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.ADD_LIST,
                    lists: res.data
                })
            })
}

export const deleteList = createdAt => (dispatch, getState) => {
    axios
        .put("/api/lists/deletelist", {createdAt}, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.DELETE_LIST,
                    lists: res.data
                })
            })
}

export const addRecipe = recipe => (dispatch) => {
    return dispatch({
        type: actionTypes.ADD_RECIPE,
        recipe: recipe
    })
}

export const removeRecipe = recipeName => (dispatch) => {
    return dispatch({
        type: actionTypes.REMOVE_RECIPE,
        recipeName: recipeName 
    })
}

export const clearList = () => dispatch => {
    return dispatch({
        type: actionTypes.CLEAR_ACTIVE_LIST
    })
}

export const getSavedRecipes = () => (dispatch, getState) => {
    axios
        .get("/api/saved", tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.GET_SAVED_RECIPES,
                    saved: res.data
                })
            })
}

export const saveRecipe = recipe => (dispatch, getState) => {
    axios
        .put("/api/saved/saverecipe", {recipe}, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.SAVE_RECIPE,
                    saved: res.data
                })
            })
}

export const unsaveRecipe = recipeName => (dispatch, getState) => {
    axios
        .put("/api/saved/unsaverecipe", {recipeName}, tokenConfig(getState))
            .then(res =>{
                dispatch({
                    type: actionTypes.UNSAVE_RECIPE,
                    saved: res.data
                })
            })
        
}

export const getFavorites = () => (dispatch, getState) => {
    axios
        .get("/api/favorites", tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.GET_FAVORITES,
                    favorites: res.data
                })
            })
}

export const favorite = recipe => (dispatch, getState) => {
    axios
        .put("/api/favorites/addrecipe", {recipe}, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.FAVORITE,
                    favorites: res.data
                })
            })
}

export const unfavorite = recipeName => (dispatch, getState) => {
    axios
        .put("/api/favorites/removerecipe", {recipeName}, tokenConfig(getState))
            .then(res =>{
                dispatch({
                    type: actionTypes.UNFAVORITE,
                    favorites: res.data
                })
            })
}