import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Settings from "./components/Settings"
import User from "./components/User"
import AddNewBook from "./components/AddNewBook"
import SearchBar from "./components/SearchBar"
import ErrorRoute from "./components/ErrorRoute"

// icons imported from https://react-icons.github.io/react-icons/
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";


function App() {
  return (
    <div className="flex p-1">
      <Router>
      {/* <div className="App">
        <p className='font-bold text-center text-red-500'>Hello Ebook Reader! </p>
      </div> */}

      <nav className="flex flex-col gap-8 border-r-2 h-screen p-6">
        <Link to="/"><IoHomeOutline className="text-3xl"/></Link>
        <Link to="/search"><CiSearch className="text-3xl"/></Link>
        <Link to="/add-new-book"><CiCirclePlus className="text-3xl"/></Link>
        <Link to="/user"><CiUser className="text-3xl"/></Link>
        <Link to="/settings"><CiSettings className="text-3xl"/></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchBar/>}/>
        <Route path="/add-new-book" element={<AddNewBook/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="*" element={<ErrorRoute/>}/> {/* Error Route */}
      </Routes>

      </Router>
    </div>
    
  )
}

export default App
