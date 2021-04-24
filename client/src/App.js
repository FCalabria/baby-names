import React from 'react';
import Filter from './components/Filter';
import './stylesheets/App.scss';
import Logo from './images/logo.png';
import filters from './data/filters.json';
import firebase from 'firebase/app'
import firebaseConfig from './services/firebase'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

class App extends React.Component {

  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig);

    this.state = {
      filters: filters,
      filtersToggle: 'shown',
      famousHumans: true,
      foodies: true,
      famousAnimals: true,
      compoundNames: true,
      epic: true,
      classic: true,
      firebaseDB: []
    };
    this.toggleFilters = this.toggleFilters.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
  }
  
  getPetData = () => {
    let ref = firebase.database().ref().child('names');
    ref.on('value', snapshot => {
      const firebaseDB = snapshot.val();
      this.setState({firebaseDB: firebaseDB});
      console.log('this state firebaseDB:',this.state.firebaseDB);
    });
  }

  toggleFilters() {
    this.setState(prevState => ({
      filtersToggle: prevState.filtersToggle === 'shown' ? 'hidden' : 'shown'
    })); 
  }

  handleFilters(data)  {
    this.setState(prevState => ({
      [data]: prevState[data] === true ? false : true
    }));
    };

  componentDidMount() {
    this.getPetData();
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

          <Filter filters={this.state.filters} filtersToggle={this.state.filtersToggle} toggleFilters={this.toggleFilters} handleFilters={this.handleFilters}/>
        </main>
      </div>
    );
  }
}

export default App;
