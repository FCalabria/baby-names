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
      firebaseDB: [],
      userFilteredNames:[]
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

  
  filterData = () => {
console.log('filterData', this.state.famousAnimals)
console.log('this state firebaseDB:',this.state.firebaseDB);
let userObjName=[];

Object.entries(this.state.firebaseDB).forEach(item => {
  //console.log(item);
  // console.log(this.state.classic)
  if(item[1].classic == this.state.classic
    && item[1].compound == this.state.compoundNames
    && item[1].epic == this.state.epic
    && item[1]['famous-human'] == this.state.famousHumans
    && item[1]['famous-pet'] == this.state.famousAnimals
    && item[1].food == this.state.foodies
    ){
      console.log(item, 'lo reune todo')
      userObjName.push(item);
      
    }
  })
  
  console.log('userObjName',userObjName)
this.setState(state => ({userFilteredNames: userObjName}));
console.log('userFilteredNames',this.state.userFilteredNames)
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
              <button className="App--button__inner " onClick={this.filterData}>generate name</button>
            </div>
          </section>

          <Filter filters={this.state.filters} filtersToggle={this.state.filtersToggle} toggleFilters={this.toggleFilters} handleFilters={this.handleFilters}/>
        </main>
      </div>
    );
  }
}

export default App;

