import {
    ADD_TO_CART,
    DELETE_CART_ITEM
} from "./types";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

export const deleteItem = (orderItem) => {
    return {
        type: DELETE_CART_ITEM,
        payload: orderItem,
    };
};