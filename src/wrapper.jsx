import { createContext, useState } from "react"

export const context = createContext(null);

const Wrapper = (props) => {
  const [formData, setFormData] = useState([])
    
  return <>
    <context.Provider value={[formData, setFormData]}>
      {props.children}
    </context.Provider>
  </>
  
}

export default Wrapper