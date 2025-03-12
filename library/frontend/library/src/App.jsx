import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import CreateBookPage from "./pages/createBookPage.jsx";
import EditBookPage from "./pages/editBookPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/nuevo" element={<CreateBookPage/>}/>
          <Route path="/editar/:id" element={<EditBookPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
