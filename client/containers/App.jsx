import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { WS_OPEN_CONNECTION_PENDING } from '../actions';

const mapStateToProps = state => ({
  errors: state.errors.list,
});

const mapDispatchToProps = dispatch => ({
  connectWS: () => dispatch({ type: WS_OPEN_CONNECTION_PENDING }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
