import React from 'react';
import style from './Note.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const css = classNames.bind(style);

import {
  increment
} from '../../actions/action-creators';

const Note = ({ count, increment }) => {
  return (
    <h1 className={css('count')} onClick={(e) => {
      increment();
    }}>
      Ready for start to apply react, redux using webpack { count }
    </h1>
  );
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.myApp);
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  increment
}, dispatch);

export { Note };
export default connect(mapStateToProps, mapDispatchToProps)(Note);
