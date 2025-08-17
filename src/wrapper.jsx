import { createContext, useState } from "react"

export const context = createContext(null);

const Wrapper = (props) => {
  const [formData, setFormData] = useState([
    {
      product_name: "bycycle",
      price:"134123",
      category: "electronic",
      description:";aksdf;asdjf;alsdjkf;alskdjf;alsdjf;l"
    }
  ])
    
  return <>
    <context.Provider value={[formData, setFormData]}>
      {props.children}
    </context.Provider>
  </>
  
}

export default Wrapper