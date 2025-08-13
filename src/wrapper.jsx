import { createContext } from "react"

const context = createContext()

const Wrapper = (props) => {
    
  return <>
    <context.Provider value={null}>
      {props.children}
    </context.Provider>
  </>
  
}

export default Wrapper