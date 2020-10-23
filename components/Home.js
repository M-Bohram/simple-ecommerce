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
  const [products, setProducts] = useState([
    //   {
    //   name: 'Vans Cotton Crew-Neck Logo-Print Slim Fit T-shirt for Men - Copen Blue',
    //   image: 'blue_shirt.jpg',
    //   category: "Shirts",
    //   price: 750,
    //   availableQuantity: 10
    // },
    // {
    //   name: 'Vans Cotton Crew-Neck Printed Regular Fit T-shirt for Men - Ash',
    //   image: 'white_shirt.jpg',
    //   category: "Shirts",
    //   price: 550,
    //   availableQuantity: 5
    // },
    // {
    //   name: 'Adidas Essentials 3-Stripes Tricot Track Jacket for Men - Black',
    //   image: 'black_shirt.jpg',
    //   category: "Shirts",
    //   price: 950,
    //   availableQuantity: 7
    // },{
    //   name: 'Vans Cotton Crew-Neck Logo-Print Slim Fit T-shirt for Men - Copen Blue',
    //   image: 'blue_shirt.jpg',
    //   category: "Shirts",
    //   price: 750,
    //   availableQuantity: 10
    // },
    // {
    //   name: 'Vans Cotton Crew-Neck Printed Regular Fit T-shirt for Men - Ash',
    //   image: 'white_shirt.jpg',
    //   category: "Shirts",
    //   price: 550,
    //   availableQuantity: 5
    // },
    // {
    //   name: 'Adidas Essentials 3-Stripes Tricot Track Jacket for Men - Black',
    //   image: 'black_shirt.jpg',
    //   category: "Shirts",
    //   price: 950,
    //   availableQuantity: 7
    // }
  ]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      console.log(products);
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["section-title"]}>Products</h1>
      <ul className={styles["products"]}>
        {products.map((product) => (
          <li className={styles["product"]}>
            <Product
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

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   // const res = await fetch('http://localhost:3001/api/product', {
//   //   headers: {
//   //     "Content-Type": "application/json"
//   //   }
//   // });
//   // const data = await res.json()
//   const data = getProducts();
//   // Pass data to the page via props
//   return { props: { data } }
// }