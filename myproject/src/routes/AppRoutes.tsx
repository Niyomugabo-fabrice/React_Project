import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from "../Components/Product.tsx";
import About from "../Components/About.tsx"
import Home from "../Pages/Home.tsx"
import MainLoyout from "../layout/MainLoyout.tsx";
// import Services from "../Components/Services.tsx";


export default function AppRoutes()
{
    return(
        <BrowserRouter>
          <Routes>
           
            <Route path="" element={<MainLoyout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>

            </Route>
         </Routes>
        </BrowserRouter>
    )
}