import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from "../Components/Product.tsx";
import About from "../Components/About.tsx"
import Home from "../Pages/Home.tsx"


export default function AppRoutes()
{
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/product" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
         </Routes>
        </BrowserRouter>
    )
}