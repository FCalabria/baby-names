import React from 'react';
import Filter from './components/Filter';
import './stylesheets/App.scss';
import Logo from './images/logo.png';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App--header">
            <h1 className="hidden">Pet names generator</h1>
            <div className="logo">
                  <img className="logo-image" src={Logo} alt="Logo" />
            </div>
          </header>
          <section className="App--section">
          <div className="App--newName"></div>
        <div className="App--button">
          <button className="App--button__inner ">generar nombre</button>
        </div>     
          </section>

            <Filter/>

        </div>
      );
    }
  }

export default App;
