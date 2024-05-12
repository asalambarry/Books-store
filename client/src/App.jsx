// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Books from './components/Books'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
