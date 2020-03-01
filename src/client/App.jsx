import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      word : "",
      list: []
    }
  }

  getInputValue(event){
    this.setState({word:event.target.value});
  }

  handleClick(event){
      let currentTask = this.state.word;
      let taskArr = this.state.list;
      taskArr.push(currentTask);
      let listItem = document.createElement('li');
      listItem.innerHTML = currentTask;
      document.getElementById('taskList').appendChild(listItem);
      this.setState({word:""});
      document.getElementById("taskName").reset();
    }

  render() {
    return (
      <div>
        <h1> Add Task: </h1>
          <input type ="text" id ="taskName" placeholder="Add task" onChange={() =>{this.getInputValue(event);}} value = {this.state.word}/>
          <div className = "submit-btn">
            <button type ="button" onClick={() =>{this.handleClick(event);}}>Submit</button>
          </div>
          <div className = "tasks">
          <h2> My Tasks:</h2>
            <ul id = "taskList">
            </ul>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);