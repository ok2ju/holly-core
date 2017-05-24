import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObserverList from '../components/ObserverList';
import { WS_OPEN_CONNECTION_PENDING } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.connectToWS();
  }

  render() {
    return (
      <ObserverList errors={this.props.errors} />
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.list,
});

const mapDispatchToProps = dispatch => ({
  connectToWS: () => dispatch({ type: WS_OPEN_CONNECTION_PENDING }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
