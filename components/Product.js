import CartIcon from "../images/white-cart.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import styles from "../styles/Product.module.scss";

export default function Product({
  id,
  name,
  image,
  category,
  price,
  availableQuantity,
}) {
  const dispatch = useDispatch();

  const convertedPrice = price.toFixed(2) + " EGP";
  return (
    <div className={styles["product-container"]}>
      <p className={styles["product-category"]}>{category}</p>
      {/* <img src={require(`../images/${image}`)} className={styles["product-img"]} /> */}
      <img src={image} className={styles["product-img"]} />
      <p className={styles["product-name"]}>{name}</p>
      <div className={styles["product-info"]}>
        <p className={styles["product-quantity"]}>
          Available Qty: <span>{availableQuantity}</span>
        </p>
        <h3 className={styles["product-price"]}>{convertedPrice}</h3>
      </div>
      <div
        className={styles["add-cart-button"]}
        onClick={() =>
          dispatch(
            addToCart({ id, name, image, category, price, availableQuantity })
          )
        }
      >
        <h4 className={styles["add-cart-text"]}>ADD TO CART</h4>
        <img src={CartIcon} className={styles["cart"]} />
      </div>
    </div>
  );
}
