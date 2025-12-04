import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Componets/Login.jsx"
import Body from "./Componets/Body.jsx"
import { Provider } from "react-redux"
import reduxStore from "./utlis/reduxStore.js"
import Profile from "./Componets/Profile.jsx"
import Feed from "./Componets/Feed.jsx"
import ConnectionsRequest from "./Componets/ConnectionsRequest.jsx"
import Myconnections from "./Componets/Myconnections.jsx"

function App() {
 
  return (
    <>
        <Provider store = {reduxStore}>
      <BrowserRouter basename="/MatchStack">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="connectionRequest" element={<ConnectionsRequest />} />
            <Route path="/Myconnections" element={<Myconnections />} />
            <Route path="/" element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>


      </>
    
  )
}

export default App
