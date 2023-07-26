import './index.css'

const AddList = props => {
  const {itemDetails} = props
  const {textInput, tagsInput} = itemDetails
  return (
    <li className="item-li-container">
      <p className="task">{textInput}</p>
      <button className="item-button" type="button">
        {tagsInput}
      </button>
    </li>
  )
}
export default AddList
