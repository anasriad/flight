import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Admin from "./components/Admin"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/admin" element={<Admin />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
