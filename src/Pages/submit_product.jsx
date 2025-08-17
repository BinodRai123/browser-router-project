import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { context } from "../wrapper";

const Form = () => {
  const [formData , setFormData] = useContext(context);
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
    
    console.log(data);
    console.log(formData)
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormData)}>
        <input
          {...register("name")}
          className="input-field"
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          {...register("DOB")}
          className="input-field"
          type="date"
          placeholder="Enter your age"
          required
        />
        <input
          className="button"
          type="submit"
          placeholder="Submit"
        />
      </form>
    </>
  );
};

export default Form;
