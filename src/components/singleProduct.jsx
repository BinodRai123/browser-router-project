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
        className="rounded shadow-xl/20 flex bg-gray-800 gap-10 hover:scale-[1.01] ease-in cursor-pointer"
      >
        <div className="image-container min-w-44">
          <img
            className="object-fit aspect-square p-5"
            src={image}
            alt="bag-photo"
          />
        </div>
        <div className="flex flex-col gap-3 product-details w-[55%] ml-auto p-10">
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
            {desc}
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
