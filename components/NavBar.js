import Link from "next/link";
import CartIcon from "../images/black-cart.svg";
import styles from "../styles/Navbar.module.scss";

export default function NavBar({ cart }) {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>MyShop</h1>
      </Link>
      {cart ? (
        <Link href="/cart">
          <img src={CartIcon} className={styles.cart} />
        </Link>
      ) : null}
    </div>
  );
}
