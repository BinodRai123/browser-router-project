import { useContext } from "react";
import Singleproduct from "../components/singleProduct";
import { context } from "../wrapper";

const Products = () => {
  const [formData, setFormData] = useContext(context);
  console.log(formData);

  return (
    <>
      <div className="flex flex-col gap-5">
        {formData.map((data) => (
          <Singleproduct
            key={data.id}
            title={data.product_name}
            rating={data.rating}
            price={data.price}
            cateogry={data.category}
            desc={data.description}
            image={data.image}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
