import { UI_COLORS } from '../colors'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label tooltip-label">{`Category: ${label || 'N/A'}`}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            className="tooltip-entry"
            style={{ color: entry.color || UI_COLORS.textPrimary }}
          >{`${entry.name || 'N/A'}: ${entry.value || 0}`}</p>
        ))}
      </div>
    )
  }

  return null
}

export default CustomTooltip
