/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import counter from '../components/counter';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import actions from '../actions/counter';  //use when complex actions here only { type: 'INCREMENT' } obj

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(counter);