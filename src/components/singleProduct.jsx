import { useNavigate } from "react-router-dom";

const Singleproduct = ({ id, title, rating, price, cateogry, desc, image }) => {
  const navigate = useNavigate();
  const moveProductDetailPage = () => {
    navigate(`product-detail/${id}`)
  }

  return (
    <>
      <div
        onClick={moveProductDetailPage}
        className="rounded shadow-xl/20 flex flex-col md:flex-row bg-gray-800 gap-10 hover:scale-[1.01] ease-in cursor-pointer"
      >
        <div className="md:w-1/2">
          <img
            className="object-center object-cover min-h-52 md:h-full md:w-auto p-4"
            src={`${image?.preview}`}
            alt="bag-photo"
          />
        </div>
        <div className="flex flex-col gap-3 p-5 md:p-10 md:w-1/2">
          <h1 className="text-3xl font-bold max-w-[30ch] border-b py-3">
            {title}
          </h1>
          <div className=" text-2xl font-medium">
            Rating:{" "}
            <span className="rating text-[1.2rem] opacity-75">{rating}</span>
          </div>
          <h3 className="price"> price: ${price} </h3>
          <div className="cateogry">
            <span className="text-2xl font-medium text-gray-300">
              Cateogry:{" "}
            </span>
            {cateogry}
          </div>
          <div className="description border-t py-2 max-w-[45ch] text-[1.1rem] ">
            <small className="text-xl font-bold text-green-500">Description:</small> {desc}
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
