import NavBar from "../components/NavBar";
import PlaceOrder from "../components/PlaceOrder";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Place Order</title>
      </Head>
      <NavBar />
      <PlaceOrder />
    </>
  );
}
