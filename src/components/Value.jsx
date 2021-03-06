import './Value.css'

const Value = ({ title, value }) => {
  return (
    <div className="value-area">
      <div className="value-text">
        <h1>{title}</h1>
        <span>/ People</span>
      </div>
      <span className="value-total">
        {isNaN(value) ? '0' : `$${value.toFixed(2)}`}
      </span>
    </div>
  )
}

export default Value
