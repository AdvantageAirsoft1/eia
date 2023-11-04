import Features from "./components/Features";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Products from "./components/Products";
import { getProducts } from "@/utils/fetchStripeProducts";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = async () => {
  const products = await getProducts()
  return (
    //Tsx files to be loaded onto Homepage
    <>
      <Hero />
      <Features />
      <Parallax />
      <>
      {products.map((products) => (
        <Products{...products} key={products.id}/>
        ))}
      </>
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;