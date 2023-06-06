import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodosPage from "./pages/Todos";

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodosPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes

