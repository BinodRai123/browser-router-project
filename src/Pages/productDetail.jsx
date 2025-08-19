import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "../wrapper";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const index = Number(id);
  const [formData, setFormData] = useContext(context);
  const product = formData[index];
  const [files, setFiles] = useState({
    message: "No Files currently selected for upload",
    preview: product.image.preview,
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      product_name: product?.product_name,
      price: product?.price,
      category: product?.category,
      description: product?.description,
      image: product?.preview,
    },
  });

  {
    /*Update the Product Details in context api*/
  }
  const handleUpdate = (data) => {
    setFormData((prev) => {
      data.image = files;
      const updated = [...prev];
      updated[index] = { ...updated[index], ...data };
      return updated;
    });
    navigate("/products");
  };

  {
    /*Delete the Product from the formData context api*/
  }
  const handleDelete = () => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
    navigate(-1);
  };

  {
    /*Check if upload File is Image or not */
    /*If it is Image it set it into setFiles state */
  }
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFiles({ message: "", preview: URL.createObjectURL(file) });
    } else
      setFiles({
        message: "❌ Please select a valid image file",
        preview: null,
      });
  };

  return (
    <>
      <div className="py-10">
        {formData.length > 0 ? (
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="flex flex-col gap-5 ml-auto w-1/2 items-center"
          >
            <div className="w-[80%] h-fit flex flex-col gap-5">
              {/*Upload Image Files */}
              <label
                className="w-full px-2 py-4 text-center text-xl bg-blue-500 hover:bg-blue-600 cursor-pointer"
                htmlFor="image_uploads"
              >
                Choose images to Change
              </label>
              <input
                {...register("image")}
                className="hidden"
                id="image_uploads"
                type="file"
                accept="image/*"
                onChange={handleUploadImage}
              />

              {/*Uploaded Images or Error will be shown } */}
              <div className=" w-full">
                {files.preview ? (
                  <img src={files.preview} alt="photo" />
                ) : (
                  <p className="border-white border-1 text-red-400 p-4">
                    {files.message}
                  </p>
                )}
              </div>
            </div>

            {/*Change Product name */}
            <input
              {...register("product_name")}
              className="text-xl font-thin product-detail-form"
              type="text"
              placeholder="Enter Product Name"
              required
            />

            {/*Change Product Price */}
            <input
              {...register("price")}
              className="text-xl font-thin product-detail-form"
              type="number"
              placeholder="Price: xxxx"
              required
            />

            {/*Change Product category */}
            <select
              {...register("category")}
              className="w-[80%] text-2xl font-medium p-1 bg-white text-black"
              name="category"
              defaultValue={product?.category || "Electronic"}
            >
              <option value="Electronic">Electornic</option>
              <option value="Food">Food</option>
              <option value="Toys">Toys</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Others">Others</option>
            </select>

            {/*Change Product description*/}
            <textarea
              {...register("description")}
              className="bg-white text-black min-h-28 product-detail-form border-none"
              name="description"
            ></textarea>

            {/*Button to Update the Data*/}
            <input
              className="bg-green-500 px-2 py-4 w-[80%] cursor-pointer"
              type="submit"
              value={"Update"}
            />

            {/*Button to Delte the Data*/}
            <button
              className="bg-red-500 px-2 py-4  w-[80%]"
              type="button"
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
