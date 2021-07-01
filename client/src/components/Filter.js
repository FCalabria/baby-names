import React from 'react';
import '../stylesheets/layout/_filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterName = this.handleFilterName.bind(this);
  }

  handleFilterName(ev) {
    this.props.handleFilters(ev.currentTarget.id);
  }
  
  render() {

    const filterList = this.props.filters.map((filter, index) => {
      return (
        <div className="App--filter__option" key={` ${filter}-${index + 1}`}>
          <div className="mt-normal-garden" style={{fontSize:12}}>
            <input type="checkbox" checked className="switch" id={filter} onChange={this.handleFilterName}/>
            <label htmlFor={filter}></label>
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