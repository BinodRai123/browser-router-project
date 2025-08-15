import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Wrapper from './Wrapper.jsx'


createRoot(document.getElementById('root')).render(
  <Wrapper>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </Wrapper>

)
