import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Singleproduct from "../components/singleProduct";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("products");
      setProducts(data); // now we set the resolved data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-7">
        {products.map((e) => (
          <Singleproduct
            key={e.id}
            cateogry={e.category}
            image={e.image}
            price={e.price}
            rating={e.rating.rate}
            title={e.title}
            desc={e.description}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
