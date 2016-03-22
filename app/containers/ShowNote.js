import Note from '../components/Note.js';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: 'INCREMENT' })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
