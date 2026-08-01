import "./SearchBar.css"

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="buscar">Buscar producto:</label>
      <input
        type="text"
        id="buscar"
        placeholder="Buscar producto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
