import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { HashRouter } from 'react-router-dom';

class App extends React.Component {

  render() {
      return (        
          <HashRouter>
            <div>
              <Main />
            </div>
          </HashRouter>
    );
  }
}

export default App;
