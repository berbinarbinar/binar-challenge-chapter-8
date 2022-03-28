import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import { Register } from "./pages/registerForm";
import { Search } from "./pages/search";
import { UpdateForm } from "./pages/updateForm";

export const AppRoutes = () => {
    return(
        <div> 
            <Navbar/>
            <Routes>
                <Route path="/" element = {<Register/>}/>
                <Route path="/edit" element = {<UpdateForm/>}/>
                <Route path="/search/user" element = {<Search/>}/>
            </Routes>
        </div>
    )
}