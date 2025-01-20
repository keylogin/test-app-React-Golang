import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import AppFooter from './AppFooter';


class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Hello World</h1>
        </div>
        <AppFooter />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);