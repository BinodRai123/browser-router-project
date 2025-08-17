import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "../wrapper";
import { nanoid } from "nanoid";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const index = Number(id);
  const [formData, setFormData] = useContext(context);
  const product = formData[index];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      product_name: product?.product_name,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });

  const handleUpdate = (data) => {
    setFormData((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...data };
      return updated;
    });
  };

  const handleDelete = () => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
    navigate(-1);
  };

  return (
    <>
      <div className="">
        {formData.length > 0 ? (
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="flex flex-col gap-5 ml-auto w-1/2 items-center"
          >
            <input
              {...register("product_name")}
              className="text-xl font-thin product-detail-form"
              type="text"
              placeholder="Enter Product Name"
              required
            />

            <input
              {...register("price")}
              className="text-xl font-thin product-detail-form"
              type="number"
              placeholder="Price: xxxx"
              required
            />

            <select
              {...register("category")}
              className="w-[80%] text-2xl font-medium p-1 bg-white text-black"
              name="category"
              defaultValue={product?.category || "Men"}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Electronic">Electornic</option>
              <option value="Food">Food</option>
            </select>

            <textarea
              {...register("description")}
              className="bg-white text-black min-h-28 product-detail-form border-none"
              name="description"
            ></textarea>

            <input
              className="bg-green-500 px-2 py-4 w-[80%] cursor-pointer"
              type="submit"
              value={"Update"}
            />

            <button
              className="bg-red-500 px-2 py-4  w-[80%]"
              onClick={handleDelete}
            >
              Delete
            </button>
          </form>
        ) : (
          "nothing..."
        )}
      </div>
    </>
  );
};

export default ProductDetail;
