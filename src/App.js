import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {userInput: '', userInputList: []}

  onChageUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitAddButton = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userInputText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  render() {
    const {userInput, userInputList} = this.state

    return (
      <div className="character-counter-app-container">
        <div className="character-counter-content-container">
          <div className="left-part-of-user-input-list">
            <div className="heading-container">
              <h1 className="heading">Count the characters like a Boss...</h1>
            </div>
            <div className="list-and-no-view-container">
              {userInputList.length === 0 ? (
                <div className="no-user-input-view-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs"
                    className="no-view-image"
                  />
                </div>
              ) : (
                <ul className="user-input-list">
                  {userInputList.map(eachItem => (
                    <li className="user-input" key={eachItem.id}>
                      <p>{eachItem.userInputText} : {eachItem.textLength}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="right-part-of-user-input-counter-container">
            <h1 className="counter-heading">Character Counter</h1>
            <form
              className="user-input-and-add-button-container"
              onSubmit={this.onSubmitAddButton}
            >
              <input
                className="user-input-elememt"
                type="text"
                value={userInput}
                placeholder="Enter the Characters here"
                onChange={this.onChageUserInput}
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
