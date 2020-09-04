import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component{
  state={
    count:0
  };

  plus = () => {
    this.setState(current => ({count : current.count + 1})); //this.state.count 대신에 이렇게 쓰는게 좋다!
  };
  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  }
  
  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("component updated");
  }

  componentWillUpdate(){
    console.log("goodbye");
  }

  render(){
    console.log("Im rendering");
    return (
      <div>
        <h1>The number is :{this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;

//react가 virtual DOM을 만든다