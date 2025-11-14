import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Componets/Login.jsx"
import Body from "./Componets/Body.jsx"
import { Provider } from "react-redux"
import reduxStore from "./utlis/reduxStore.js"

function App() {
 
  return (
    <>
        <Provider store = {reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>


      </>
    
  )
}

export default App
