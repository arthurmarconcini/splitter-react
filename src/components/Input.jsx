import './Input.css'
import DollarIcon from '../images/icon-dollar.svg'
import PersonIcon from '../images/icon-person.svg'

export default props => {
  return (
    <div className="content-input">
      <label htmlFor={props.name}>{props.name}</label>
      <div className="input-area">
        <img
          src={props.name === 'Bill' ? DollarIcon : PersonIcon}
          alt="Dollar Icon"
        />
        <input
          name={props.name}
          id={props.name}
          type="number"
          placeholder="0"
          onChange={e => props.handleInput(e)}
          value={
            props.name === 'Bill' ? Number(props.bill) : Number(props.persons)
          }
        />
      </div>
    </div>
  )
}
