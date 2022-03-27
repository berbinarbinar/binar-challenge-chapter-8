import { BrowserRouter, Route, Routes} from 'react-router-dom'
import EditPlayer from './pages/EditPlayer'
import AddPlayer from './pages/AddPlayer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='edit' element={<EditPlayer />}/>
          <Route path='add' element={<AddPlayer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}