import './Value.css'

export default ({ title, value }) => {
  return (
    <div className="value-area">
      <div className="value-text">
        <h1>{title}</h1>
        <span>/ People</span>
      </div>
      <span className="value-total">
        {value === NaN ? '0' : `$${value.toFixed(2)}`}
      </span>
    </div>
  )
}
