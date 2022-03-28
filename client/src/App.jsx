import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import NotFound from "./pages/notFound"
import Register from "./pages/register"

export default function App(){
    return (
        <BrowserRouter>
        <ChakraProvider theme={theme}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
        </ChakraProvider>
        </BrowserRouter>
    )
}