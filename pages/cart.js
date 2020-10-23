import NavBar from '../components/NavBar';
import Head from 'next/head';
import Cart from '../components/Cart';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <NavBar />
      <Cart />
    </div>
  )
}