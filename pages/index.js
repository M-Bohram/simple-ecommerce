import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar cart/>
      <Home />
    </>
  )
}
