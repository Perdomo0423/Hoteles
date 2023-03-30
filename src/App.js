import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HotelApp from "./Pages/HotelColombia"
import HotelVista1 from "./Pages/VistaPrincipal"


function App() {
  

  return (
    <Router>
      <>
         <HotelApp />
        <Routes>
  
          <Route exact path="/" element={<HotelVista1 />} />

        </Routes>
      </>
    </Router>
  )
}

export default App;
