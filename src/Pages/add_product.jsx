import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { context } from "../wrapper";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useContext(context);
  const [files, setFiles] = useState({
    message: "No Files currently selected for upload",
    preview: null,
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormData = (data) => {
    data.id = nanoid();
    data.image = files;
    setFormData([data, ...formData]);
    navigate("/products");
  };

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
      <form
        className="min-h-screen bg-inherit flex flex-col items-center gap-8 m py-10"
        onSubmit={handleSubmit(handleFormData)}
      >
        <label
          className="w-1/2 px-2 py-4 text-center text-xl bg-blue-500 hover:bg-blue-600 cursor-pointer"
          htmlFor="image_uploads"
        >
          Choose images to upload (PNG, JPG)
        </label>
        <input
          {...register("image")}
          className="hidden"
          id="image_uploads"
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
        />

        {/* { //Uploaded Images will show } */}
        <div className=" w-1/2">
          {files.preview ? (
            <img src={files.preview} alt="photo" />
          ) : (
            <p className="border-white border-1 text-red-400 p-4">
              {files.message}
            </p>
          )}
        </div>

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
