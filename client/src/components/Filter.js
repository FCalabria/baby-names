import React from 'react';
import '../stylesheets/layout/_filter.scss';

class Filter extends React.Component {
  render() {
    return (
      <aside className="App--filter">
        <div className="App--filter__option shown">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>filtros</p> </div>
        <div className="App--filter__option hidden">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>humanos famosos</p></div>
        <div className="App--filter__option hidden">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>comida</p></div>
        <div className="App--filter__option hidden">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>animales famosos</p></div>
        <div className="App--filter__option hidden">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>nombres compuestos</p></div>
        <div className="App--filter__option hidden">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>épicos</p></div>
        <div className="App--filter__option hidden">
          <input type="checkbox" className="switch" id="switch" />
          <label for="switch"></label><p>clásicos</p></div>

      </aside>
    );
  }
}
export default Filter;
