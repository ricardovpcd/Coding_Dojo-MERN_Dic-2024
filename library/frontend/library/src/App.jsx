import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import CreateBookPage from "./pages/createBookPage.jsx";
import EditBookPage from "./pages/editBookPage.jsx";
import RegisterPage from "./pages/registerPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import RouteMiddleware from "./middlewares/routeMiddleware.jsx";
import CreateReviewPage from "./pages/createReviewPage.jsx";
import ListReviewsPage from "./pages/listReviewsPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={ <RegisterPage/> } />
          <Route path="/login" element={ <LoginPage/> }/>

          <Route element={<RouteMiddleware/>}>

            <Route path="/" element={ <HomePage/> } />
            <Route path="/nuevo" element={<CreateBookPage/>}/>
            <Route path="/editar/:id" element={<EditBookPage/>}/>
            <Route path="/crear-comentario/:id" element={<CreateReviewPage/>}/>
            <Route path="/listar-comentarios/:id" element={<ListReviewsPage/>}/>

          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
