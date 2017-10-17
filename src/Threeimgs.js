import React from 'react';
import ReactDOM from 'react-dom';

class Threeimgs extends React.Component {

  render() {
    return (
      <div id='lefthalf'>
        <div className='picone' onClick={this.props.toggler}><img className='imgfirst' src={this.props.firstpics} /><div className='txtpic'>{this.props.first}</div></div>
        <div className='pictwo' onClick={this.props.toggle}><img className='imgfirst' src={this.props.secondpics} /><div className='txtpic'>{this.props.second}</div></div>
        <div className='picthree'><p className='midtext'>{this.props.mention}</p></div>
      </div>
    )
  }
}
export default Threeimgs;