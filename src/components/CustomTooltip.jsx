
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: '#fff',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        <p className="label" style={{ margin: 0, color: '#000' }}>
          {`Category: ${label || 'N/A'}`}
        </p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            style={{ margin: 0, color: entry.color || '#000' }}
          >{`${entry.name || 'N/A'}: ${entry.value || 0}`}</p>
        ))}
      </div>
    )
  }

  return null
}

export default CustomTooltip
