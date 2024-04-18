import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Hooks from "./pages/Hooks"
import MultiplyTwo from "./pages/MultiplyTwo"
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Refresher</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/multiplyTwo/:number" element={<MultiplyTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
