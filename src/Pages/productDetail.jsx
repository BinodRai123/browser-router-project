import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(-1)
  }

  return (
    <>
      <div>ProductDetail</div>

      <button className="button" onClick={handleButton}>Go Back</button>
    </>
  );
};

export default ProductDetail;
