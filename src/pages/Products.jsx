import { useEffect, useState } from "react";

import axios from "axios";
import ProductList from "../components/ProductsList";

function Products({ basket, setBasket, products, setProduct }) {
  

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        await axios.get(`https://fakestoreapi.com/products`)
          .then((respone) => setProduct(respone.data)).catch((err) => console.log(err))



      } catch { }
    }
    fetchFunction()
  }, [])

  return (
    <ProductList products={products} basket={basket} setBasket={setBasket} />
  );
}

export default Products;