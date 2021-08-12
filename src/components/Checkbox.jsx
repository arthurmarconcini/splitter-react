const Checkbox = ({ name, handleCheckboxClick }) => {
  return (
    <button
      onClick={() => handleCheckboxClick(Number(name))}
    >{`${name}%`}</button>
  )
}

export default Checkbox
