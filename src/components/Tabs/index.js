import './index.css'

const Tabs = props => {
  const {eachTabName, updateActiveTab, isActive} = props
  const {displayText, optionId} = eachTabName

  const onClickActiveTab = () => {
    updateActiveTab(optionId)
  }
  const activeClassName = isActive ? 'active-tab' : ''

  return (
    <li className="li-container">
      <button
        className={`{tab-button ${activeClassName}`}
        type="button"
        onClick={onClickActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default Tabs
