const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" name="search" id="search" onChange={(e) => handleSearch(e.target.value)} className="form-control" placeholder="Search Protocol Name" />
    </div>
  )
}

export default Search