import React from 'react';
import Filter from './components/Filter';
import './stylesheets/App.scss';
import Logo from './images/logo.png';
import filters from './data/filters.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: filters,
      filterOpen: false,
    };
  }

  openFilters() {
    this.setState({ filterOpen: true })
  }

  closeFilters() {
    this.setState({ filterOpen: false })
  }

  render() {
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="hidden">Pet names generator</h1>
          <div className="logo">
            <img className="logo-image" src={Logo} alt="Logo" />
          </div>
        </header>

        <main className="main">
          <section className="App--section">
            <div className="App--newName"></div>
            <div className="App--button">
              <button className="App--button__inner ">generate name</button>
            </div>
          </section>

          <Filter filters={this.state.filters}
            isOpen={this.state.filterOpen}
            closeCallback={this.closeFilters.bind(this)} />
        </main>

      </div>
    );
  }
}

export default App;
