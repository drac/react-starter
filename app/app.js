import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      //initial states here
    }
  }

  render(){
    return (
      <h1>Hello Cad</h1>
    )
  }

}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)