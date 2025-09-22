// CategoryDropdown.jsx (refactored)
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'

const CategoryDropdown = ({
  categories = [],
  selected = [],
  onApply,
  open, // Use the open prop from the parent
  onToggle, // Use the onToggle prop from the parent
}) => {
  const [tempSelected, setTempSelected] = useState(selected || [])
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  // Sync local temp selection with the `selected` prop
  useEffect(() => {
    setTempSelected(selected ?? [])
  }, [selected])

  // Scroll down if dropdown opens and there isn't enough space below
  // This logic is specific to the dropdown's menu and can remain here.
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
    onToggle?.(false) // Use the parent's onToggle to close the dropdown
  }

  return (
    <div className="category-dropdown-container">
      <div className="dropdown-header">
        <button
          type="button"
          className="dropdown-toggle"
          ref={toggleRef}
          onClick={() => onToggle?.(!open)} // Use the parent's onToggle to flip the state
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
