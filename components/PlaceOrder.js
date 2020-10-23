import { useEffect, useState } from "react";
// import ItemImg from '../images/blue_shirt.jpg';
// import { initializeStore } from '../redux'
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/PlaceOrder.module.scss";

export default function PlaceOrder() {
  const orderItems = useSelector((state) => state.orderItems);
  // const orderItemsState = [];
  const [totalCost, setTotalCost] = useState(0);

  const updateTotalCost = () => {
    const newTotalCost = orderItems.reduce(
      (total, orderItem) => total + orderItem.qty * orderItem.price,
      0
    );
    setTotalCost(newTotalCost);
  };

  useEffect(() => {
    updateTotalCost();
  }, [orderItems]);

  return (
    <div className={styles["container"]}>
      <h2 className={styles["section-title"]}>Order Now!</h2>
      <div className={styles["cart-container"]}>
        <div className={styles["location"]}>
          <h4>Location</h4>
          <p className={styles["location-detail"]}>12 High Square, Nasr City, Cairo</p>
        </div>
        <h2></h2>
        <div className={styles["total-cost"]}>
          <h4>Total</h4>
          <h4>{totalCost}</h4>
        </div>
        <div className={styles["place-order"]}>Place Order</div>
      </div>
    </div>
  );
}
