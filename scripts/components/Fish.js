/*
  Fish (<Fish />)
*/
import React from 'react';
import autobind from 'autobind-decorator';
import h from '../helpers';

@autobind
class Fish extends React.Component {

  onButtonClick () {
    console.log("Going to add the fish", this.props.details);
    var key = this.props.index;
    this.props.addToOrder(key);
  }

  render() {
    var details = this.props.details;
    var isAvailable = (details.status === 'available' ? true : false);
    var buttonText = (isAvailable ? 'Add to Order' : 'Sold Out!');
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{h.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    );
  }
}

Fish.propTypes = {
  addToOrder: React.PropTypes.func.isRequired
};

export default Fish;
