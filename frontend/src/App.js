import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Settings from "./components/Settings"
import User from "./components/User"
import AddNewBook from "./components/AddNewBook"

function App() {
  return (
    <Router>
      <div className="App">
        <p className='font-bold text-center text-red-500'>Hello Ebook Reader! </p>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Add New Book</Link>
        <Link to="/">User</Link>
        <Link to="/">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/add-new-book" element={<AddNewBook/>}/>
      </Routes>
    </Router>

  )
}

export default App
