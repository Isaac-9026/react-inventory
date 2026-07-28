function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;