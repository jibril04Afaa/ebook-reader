

const SearchBar = () => {
  return (
    <div>
      
      {/* Inner Container */}
      <div className="w-full">
      {/* Title/Label */}
        <div>
          <label htmlFor="search-bar"></label>
        </div>

      {/* Search Bar */}
        <div>
          <input type="text" className="border-2"/>
        </div>
      </div>

    </div>
  )
}

export default SearchBar