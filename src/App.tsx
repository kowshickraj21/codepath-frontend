import { Route,Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
function App() {

  return (
    <BrowserRouter basename={`/`}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
