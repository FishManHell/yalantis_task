import {createAction} from "@reduxjs/toolkit";

export const addEmployee = createAction('favoritesReducer/favEmployee');
export const removeEmployee = createAction('favoritesReducer/RemoveEmployee');
export const getFavEmployee = createAction('favoritesReducer/getFavEmployee');
