const CategoryFilter = ({ categories, selected, onChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '0.5rem' }}>Filter by category:</label>
      <select
        value={selected || ''}
        onChange={(e) => onChange(e.target.value || null)}
      >
        <option value="" disabled hidden>
          Select a category
        </option>
        {categories.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilter
