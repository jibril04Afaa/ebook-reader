import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="border-2 p-4">
      
      {/* Inner Container */}
      <div className="">

        {/* Title/Label */}
        <div>
          <label htmlFor="search-bar"></label>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border-2 rounded-xl">
          <CiSearch className="text-3xl"/>
          <input type="text" className="h-full"/>
          <button className="rounded-lg pl-4 pr-4 pt-2 pb-2 bg-gold font-bold">Search</button>
        </div>

      </div>

      {/* Search Results // display only when search bar is not empty */}
      <div className="">
        {/* Inner Container */}
        <div className="">
          {/* Search Results */}
          <div className="border-2 rounded-lg mt-4 p-2 bg-gold">
            {/* First Search Result */}
            <div className="border-b-2 pt-2 pb-2">
              <p className="font-bold">The Great Gatsby</p>
            </div>

            {/* Second Search Result */}
            <div className="border-b-2 pt-2 pb-2">
              <p className="font-bold"> The Great Galveston Hurricane</p>
            </div>

            {/* Third Search Result */}
            <div className="border-b-2 pt-2 pb-2">
              <p className="font-bold">The Great Greek Mediterranean G..</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchBar