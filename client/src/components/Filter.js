import React from 'react';
import '../stylesheets/layout/_filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {

    const filterList = this.props.filters.map((filter, index) => {
      return (
        <div className="App--filter__option">
          <div className="mt-normal-garden" style={{fontSize:12}}>
            <input type="checkbox" className="switch" id={index + 1} />
            <label for={index + 1}></label>
          </div>
          <p>{filter}</p>
        </div>
      )
    }
    );

    return (

      <aside className="App--filter">

        <div className="App--filter__option controler" onClick={this.props.toggleFilters}>     
          <p>filters</p>
        </div>
        
        <div className={`App--filter__container ${this.props.filtersToggle}`} >
        {filterList}
        </div>
      </aside>

    );
  }
}
export default Filter;
