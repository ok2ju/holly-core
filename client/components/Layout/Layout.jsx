import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import ObserverList from '../ObserverList';
import theme from './theme.css';

class Layout extends PureComponent {
  static propTypes = {
    errors: PropTypes.array,
    connectWS: PropTypes.func,
  };

  componentDidMount() {
    this.props.connectWS();
  }

  render() {
    return (
      <div className={theme.layout}>
        <Header />
        <div className={theme.content}>
          <ObserverList errors={this.props.errors} />
        </div>
      </div>
    );
  }
}

export default Layout;
