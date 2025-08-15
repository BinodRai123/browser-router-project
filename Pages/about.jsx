import { useEffect } from "react"
import axios from "../utils/axios"

let getProduct = async function () {
  let {data} = await axios.get("products");
  console.log(data);
}


const About = () => {
  useEffect(() => {
    getProduct();
  },[])

  return (
    <div>About</div>
  )
}

export default About