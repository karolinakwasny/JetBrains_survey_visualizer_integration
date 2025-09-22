import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'

const CategoryDropdown = ({
  categories = [],
  selected = [],
  onApply,
  open,
  onToggle,
}) => {
  const [tempSelected, setTempSelected] = useState(selected || [])
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    setTempSelected(selected ?? [])
  }, [selected])

  useLayoutEffect(() => {
    if (open && toggleRef.current && menuRef.current) {
      const rect = toggleRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const dropdownHeight = menuRef.current.offsetHeight || 250

      if (spaceBelow < dropdownHeight) {
        const scrollAmount = dropdownHeight - spaceBelow + 20
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' })
      }
    }
  }, [open])

  const toggleCategory = (name) => {
    setTempSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    )
  }

  const handleDone = () => {
    onApply?.(tempSelected)
    onToggle?.(false)
  }

  return (
    <div className="category-dropdown-container">
      <div className="dropdown-header">
        <button
          type="button"
          className="dropdown-toggle"
          ref={toggleRef}
          onClick={() => onToggle?.(!open)}
        >
          Select categories ({selected?.length ?? 0})
        </button>

        {selected.length === 0 && (
          <span className="no-categories">
            No categories selected. Use "Select categories" to filter results.
          </span>
        )}
      </div>

      {open && (
        <div ref={menuRef} className="dropdown-fullwidth">
          <div className="dropdown-categories">
            {categories.map((c, idx) => {
              const isSel = tempSelected.includes(c.name)
              return (
                <React.Fragment key={c.id}>
                  <button
                    type="button"
                    onClick={() => toggleCategory(c.name)}
                    className={`category-item ${isSel ? 'selected' : ''}`}
                  >
                    {c.name}
                  </button>
                  {idx < categories.length - 1 && (
                    <span className="separator">|</span>
                  )}
                </React.Fragment>
              )
            })}
          </div>
          <div className="dropdown-actions">
            <button className="done-btn" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryDropdown
