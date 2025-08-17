import { useContext } from "react";
import Singleproduct from "../components/singleProduct";
import { context } from "../wrapper";

const Products = () => {
  const [formData, setFormData] = useContext(context);
  console.log(formData.length)

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
        )) : "Nothing...."}
      </div>
    </>
  );
};

export default Products;
