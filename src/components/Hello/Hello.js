import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchColorAction } from '../../actions/actions_color';

// Component Styles
import './Hello.scss';

class Hello extends Component {

  componentWillUnmount = () => {
    this.props.dispatch(switchColorAction('#FFF', false));
  }

  handleSwitchColor = (e) => {
    e.preventDefault();
    this.props.dispatch(switchColorAction('#2A2F3A', true));
  }

  render() {
    const { colorCurrent, colorSwitched } = this.props;
    const btnClass = colorSwitched ? 'clicked' : '';
    const colorClass = colorSwitched ? 'black' : 'white';

    return (
      <div className={`hello ${btnClass}`}>
        <h4 className='hello-title'>Hello</h4>
        <span>
          The current BG color is <span className={`hello-color hello-color--${colorClass}`}>{colorCurrent}</span>
        </span>
        {!colorSwitched &&
          <button className='hello-btn' onClick={this.handleSwitchColor}>Switch Color</button>}
        {colorSwitched &&
          <p>Redux! You just performed an action 🎉</p> }
        <Link to='/about' className='hello-link'>About</Link>
      </div>
    );
  }
}

Hello.propTypes = {
  colorCurrent: PropTypes.string,
  colorSwitched: PropTypes.bool,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  const { color } = state;
  const { colorCurrent, colorSwitched } = color;
  return {
    colorCurrent,
    colorSwitched
  };
};

export default connect(mapStateToProps)(Hello);
