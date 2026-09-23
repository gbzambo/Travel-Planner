import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Destinos from "./pages/Destinos"
import DestinoDetalhes from "./pages/DestinoDetalhes"
import Mapa from "./pages/Mapa"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/:id" element={<DestinoDetalhes />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App