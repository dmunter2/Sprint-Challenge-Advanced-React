import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerCard from './component/PlayerCard'
import style from 'styled-components'
import NavBar from './component/NavBar'

const DIV = style.div`
align-items: center;
display: flex;
flex-direction: column;
`

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }


  componentDidMount() {
    fetch(`http://localhost:5000/api/players/`)
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .catch(err => console.log('hey', err))

  }






  render(){
    
    
    return(
      <DIV>
        <NavBar />
        <PlayerCard users={this.state.users}/>
      </DIV>
  
    )
  }

}

export default App;


