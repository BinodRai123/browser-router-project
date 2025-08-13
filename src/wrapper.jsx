import { createContext } from "react"

const context = createContext()

const Wrapper = (props) => {
    
  return <>
    <context.Provider>
      {props.children}
    </context.Provider>
  </>
  
}

export default Wrapper