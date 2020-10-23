import { ADD_TO_CART, DELETE_CART_ITEM } from "./types";

const initialState = {
  orderItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newOrderItem = {
        ...action.payload,
        totalPrice: action.payload.price,
        qty: 1,
      }; //initialize orderItem from a product
      return {
        orderItems: [...state.orderItems, newOrderItem],
      };
    case DELETE_CART_ITEM:
      const deletableOrderItem = action.payload;
      const cleanedOrderItems = [...state.orderItems].filter(
        (orderItem) => orderItem.name !== deletableOrderItem.name
      );
      return {
        orderItems: cleanedOrderItems,
      };
    default:
      return state;
  }
}
