import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {ConfigureStore} from './Redux/configureStore';


class App extends Component {
 
 
  render() {
    const store=ConfigureStore();
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
