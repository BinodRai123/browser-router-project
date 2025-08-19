import Mainroutes from "./all_routes/mainroutes";
import Navbar from "./Navbar/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen text-white px-20">
        <Mainroutes />
      </div>
    </>
  );
};

export default App;
