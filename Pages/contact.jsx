import { useState } from "react";
import Category from "../components/cateogry"

const Contact = () => {
  const [category, setCategory] = useState("");

  return (
    <Category onSelect={setCategory}/>
  )
}

export default Contact