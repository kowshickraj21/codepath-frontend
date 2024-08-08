import { Route,Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import Problem from "./pages/problem"
function App() {

  return (
    <BrowserRouter basename={`/`}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/problem/:problemId" element={<Problem />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
