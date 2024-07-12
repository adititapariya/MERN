import React from 'react'
import './App.css'
import PlayerForm from './Player/PlayerForm'
import PlayerSingle from './Player/PlayerSingle'
import PlayerList from './Player/PlayerList'

class App extends React.Component{
  render(){
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>Menu</div>
        </div>
        <div className='row'>
          <div className='col s3'><PlayerList /></div>
          <div className='col s3'><PlayerSingle /></div>
        </div>
        <div className='row'>
          <div className='col s12'><PlayerForm /></div>
        </div>
      </div>
    )
  }
}

export default App
