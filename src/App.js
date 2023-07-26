import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tabs from './components/Tabs'
import './App.css'
import AddList from './components/AddList'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    textInput: '',
    tagsInput: '',
    activeTabId: '',
    inputListData: [],
  }

  optionValue = each => {
    const {displayText} = each
    return <option className="option">{displayText}</option>
  }

  onChangeTagsList = event => {
    this.setState({tagsInput: event.target.value})
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  updateActiveTab = optionId => {
    this.setState({activeTabId: optionId})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {textInput, tagsInput} = this.state
    const newData = {
      id: uuidv4(),
      textInput,
      tagsInput,
    }
    this.setState(prevState => ({
      inputListData: [...prevState.inputListData, newData],
      textInput: '',
      tagsInput: '',
    }))
  }

  render() {
    const {textInput, tagsInput, activeTabId, inputListData} = this.state
    const isLength = inputListData.length > 0
    return (
      <div className="head-container">
        <div className="task-container">
          <h1 className="heading">Create a task!</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="container">
              <label htmlFor="task" className="label">
                Task
              </label>
              <input
                id="task"
                className="input"
                value={textInput}
                placeholder="Enter the task here"
                onChange={this.onChangeTextInput}
              />
            </div>
            <div className="container">
              <label className="label" htmlFor="tags">
                Tags
              </label>
              <select
                id="tags"
                value={tagsInput}
                className="input"
                onChange={this.onChangeTagsList}
              >
                {tagsList.map(each => this.optionValue(each))}
              </select>
            </div>
            <button className="button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="ul-container">
            {tagsList.map(eachTab => (
              <Tabs
                eachTabName={eachTab}
                key={eachTab.optionId}
                updateActiveTab={this.updateActiveTab}
                isActive={eachTab.optionId === activeTabId}
              />
            ))}
          </ul>
          <h1 className="tags-heading">Tasks</h1>
          {isLength ? (
            <ul className="list-item-container">
              {inputListData.map(eachItem => (
                <AddList key={eachItem.id} itemDetails={eachItem} />
              ))}
            </ul>
          ) : (
            <div className="not-add">
              <p className="tags-heading">No Tasks Added Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
