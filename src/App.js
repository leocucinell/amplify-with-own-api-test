import React from 'react';

import ownApi from './apis/ownApi';

import './App.css';

class App extends React.Component {
  state = {title: "Loading..."}

  async componentDidMount(){
    const message = await ownApi.get("data");
    console.log(message.data);
    this.setState({
      title: message.data
    });
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
