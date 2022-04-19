import React from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  return (
    <div id="main">
      <input id="rotateby-input" type={'number'}  /><br />
      <img
        src={star}
        onClick={() => setCount(count + 1)}
        height="300px"
        width="300px"
        style={{transform:`rotate(0deg)`}}
      />
    </div> 
  )
}


export default App;
