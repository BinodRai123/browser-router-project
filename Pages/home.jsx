import { useContext, useState } from "react";
import { context } from "../src/wrapper";

const Home = () => {
  const [formData] = useContext(context);
  const [showList, setShowList] = useState(false);

  const handleShowData = () => {
    setShowList(showList ? false : true);
  };

  return (
    <div className="min-h-screenflex flex-col items-center py-10">
      <button
        onClick={handleShowData}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
      >
        {showList ? "Hide Data" : "Show Data"}
      </button>

      {showList && (
        <ul className="mt-6 w-full max-w-md divide-y divide-gray-200">
          {formData.map((data) => (
            <li
              key={data.id}
              className="mt-2 px-4 py-3 bg-white rounded-lg shadow-sm shadow-white transition-colors"
            >
              <span className="font-medium text-gray-800">Name:</span>{" "}
              <span className="text-gray-600">{data.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
