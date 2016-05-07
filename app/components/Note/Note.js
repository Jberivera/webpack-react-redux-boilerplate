import React from 'react';
import style from './Note.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

const css = classNames.bind(style);

const Note = ({ count, onClick }) => {
  return (
    <h1 className={css('count')} onClick={(e) =>{
      onClick();
    }}>
      Ready for start to apply react, redux using webpack { count }
    </h1>
  );
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.myApp);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
};

export { Note };
export default connect(mapStateToProps, mapDispatchToProps)(Note);
