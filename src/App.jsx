import Mainroutes from "../all_routes/mainroutes"
import Navbar from "../Navbar/navbar"

const App = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh] text-white px-20"> 
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App