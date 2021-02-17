import React from 'react';
import '../stylesheets/layout/_filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const filterList = this.props.filters.map((filter, index) => {
      return (
        <div className="App--filter__option filters hidden">
          <input type="checkbox" className="switch" id={index + 1} />
          <label for="switch"></label><p>{filter}</p></div>
      )
    }
    );

    return (

      <aside className="App--filter">

        <div className="App--filter__option controler shown" onClick={this.props.closeCallback}>
          <input type="checkbox" className="switch" id="filterControl" />
          <label for="switch"></label><p>filters</p></div>

        {filterList}
      </aside>

    );
  }
}
export default Filter;
