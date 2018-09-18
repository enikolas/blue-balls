import React, { Component } from 'react';
import ButtonAppBar from './components/AppBar/ButtonAppBar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
			<div>
				<ButtonAppBar/>
      	<Content />
			</div>
    );
  }
}

export default App;
