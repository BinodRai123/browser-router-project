import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { context } from "../wrapper";

const Form = () => {
  const [formData, setFormData] = useContext(context);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormData = (data) => {
    data.id = nanoid();
    setFormData([...formData, data]);
    reset();
  };

  return (
    <>
      <form className="flex flex-col gap-8 mt-16 items-center" onSubmit={handleSubmit(handleFormData)}>
        <input
          {...register("product_name")}
          className="text-xl font-thin add-product-field"
          type="text"
          placeholder="Enter Product Name"
          required
        />
        <input
          {...register("price")}
          className="text-xl font-thin add-product-field"
          type="number"
          placeholder="Price: xxxx"
          required
        />

        <select
          {...register("category")}
          onChange={(e) => console.log(e.target.value)}
          className="w-1/2 text-2xl font-medium p-1 bg-white text-black"
          name="category"
          defaultValue={"Food"}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Electronic">Electornic</option>
          <option value="Food">Food</option>
        </select>

        <textarea
          {...register("description")}
          className="bg-white text-black min-h-28 add-product-field border-none"
          name="description"
        ></textarea>

        <input className="button" type="submit" placeholder="Submit" />
      </form>
    </>
  );
};

export default Form;
