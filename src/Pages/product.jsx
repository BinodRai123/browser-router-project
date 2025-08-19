import { useContext, useEffect } from "react";
import Singleproduct from "../components/singleProduct";
import { context } from "../wrapper";
import axios  from "../utils/axios";

const Products = () => {
  const [formData, setFormData] = useContext(context);

  const getProducts = async () => {
    const {data} = await axios.get("products");
    localStorage.setItem("products", JSON.stringify(data));
    let products = JSON.parse(localStorage.getItem("products"));
    products = products.map(product => ({
      id: product.id,
      category: product.category,
      description: product.description,
      price: product.price,
      product_name: product.title,
      image: {
        message: "",
        preview: product.image
      }
    }))
    
    if (formData.length === 0) {
    setFormData(products);
  }
  }

  useEffect(() => {
    getProducts();
    console.log("reload")
  },[]);

  return (
    <>
      <div className="flex flex-col gap-5">
        {formData.length > 0 ? formData.map((data , i) => (
          <Singleproduct
            key={i}
            id={i}
            title={data.product_name}
            rating={data.rating}
            price={data.price}
            cateogry={data.category}
            desc={data.description}
            image={data.image}
          />
        )) : <h1 className="text-red-500 text-4xl mt-6 uppercase">No Product Register.....!</h1> }
      </div>
    </>
  );
};

export default Products;
