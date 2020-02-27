import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor () {
	    	super()
	    	this.state = {
	    		word : "",
	    		list : ""
	    	};
	};
	changeHandler(event){
	  this.setState({word:event.target.value});
	  console.log("change", event.target.value);
}
  render() {
    return (
      <div>
        {this.state.list}
        <input onChange={(event) =>{this.changeHandler(event);}}/>
        <button onClick={() =>{this.setState( { list : this.state.word, value: ""} ) } }>Erase</button>
      </div>
    );
  };
};

export default hot(module)(App);
