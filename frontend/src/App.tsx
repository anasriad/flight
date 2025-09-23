import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Admin from "./components/Admin"
import Flights from "./pages/Flights"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/flights" element={<Flights/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
