import { Route,Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import Problem from "./pages/problem"
import ProtectedRoute from "./components/protectedRoutes"
import GhHandler from "./pages/GhHandler"

function App() {


  return (
    <BrowserRouter basename={`/`}>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />}/>
        <Route path="/problem/:problemId" element={<ProtectedRoute element={<Problem />} />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/github/callback" element={<GhHandler />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
