import { useEffect, useState } from "react";
import Product from "./Product";
import styles from "../styles/Home.module.scss";
// import { getProducts } from '../controllers/product';

const getProducts = async () => {
  const result = await fetch("http://localhost:3000/api/product", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
};

export default function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["section-title"]}>Products</h1>
      <ul className={styles["products"]}>
        {products.map((product) => (
          <li className={styles["product"]} key={product._id}>
            <Product
              id={product._id}
              name={product.name}
              image={product.image}
              category={product.category}
              price={product.price}
              availableQuantity={product.availableQuantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
