import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import ObserverList from '../ObserverList';
import theme from './theme.css';

class Layout extends PureComponent {
  static propTypes = {
    messages: PropTypes.array,
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
          <ObserverList messages={this.props.messages} />
        </div>
      </div>
    );
  }
}

export default Layout;
