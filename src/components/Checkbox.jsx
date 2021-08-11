export default ({ name, handleCheckboxClick }) => {
  return (
    <button
      onClick={() => handleCheckboxClick(Number(name))}
    >{`${name}%`}</button>
  )
}
