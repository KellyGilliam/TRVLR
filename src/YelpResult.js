//THIS BUILDS UP EACH RESULT COMPONENT

import React from 'react';
import ReactDOM from 'react-dom';

class YelpResult extends React.Component {
  render() {
    let ySugg = this.props.data;
    return (
      <div className="yelpSuggs">
        <p className="name"><span>name: </span>{ySugg.name}</p>
        <p className="address"><span>address: </span>{ySugg.address}</p>
        <p className="phone"><span>phone: </span>{ySugg.phone}</p>
      </div>
    );
  }
}

module.exports = YelpResult;


