function SearchBar({ search, setSearch }) {
  function clearSearch() {
    setSearch("");
  }

  return (
    <div className="card">

      <h2>🔍 Search Student</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search by Name or Register Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-btn"
            onClick={clearSearch}
          >
            ✖
          </button>
        )}

      </div>

    </div>
  );
}

export default SearchBar;