import React from 'react'

const CategoryFilter = ({
  categories,
  selected = [],
  onChange,
  layout = 'sidebar',
}) => {
  const handleClick = (categoryName) => {
    if (selected.includes(categoryName)) {
      onChange(selected.filter((c) => c !== categoryName))
    } else {
      onChange([...selected, categoryName])
    }
  }

  // Conditional class based on layout
  const containerClass =
    layout === 'sidebar' ? 'category-filter-sidebar' : 'category-filter-bottom'

  return (
    <div className={containerClass}>
      <div style={{ marginBottom: '0.5rem' }}>
        <label
          style={{
            marginRight: '0.5rem',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          Filter by category:
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
          {categories.map((c) => {
            const isSelected = selected.includes(c.name)
            return (
              <div
                key={c.id}
                onClick={() => handleClick(c.name)}
                style={{
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: isSelected ? '#4caf50' : '#e0e0e0', // selected green, unselected gray
                  color: isSelected ? '#fff' : '#333',
                  userSelect: 'none',
                  fontSize: '0.875rem',
                }}
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
