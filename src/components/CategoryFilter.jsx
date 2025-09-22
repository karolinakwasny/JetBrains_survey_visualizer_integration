const CategoryFilter = ({ categories, selected = [], onChange }) => {
  const handleClick = (categoryName) => {
    if (selected.includes(categoryName)) {
      onChange(selected.filter((c) => c !== categoryName))
    } else {
      onChange([...selected, categoryName])
    }
  }

  return (
    <div className="category-filter-container">
      <div className="category-filter-label-wrapper">
        <label className="category-filter-label">Filter by category:</label>
        <div className="category-filter-list">
          {categories.map((c) => {
            const isSelected = selected.includes(c.name)
            return (
              <div
                key={c.id}
                onClick={() => handleClick(c.name)}
                className={`category-filter-item${
                  isSelected ? ' selected' : ''
                }`}
              >
                {c.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
