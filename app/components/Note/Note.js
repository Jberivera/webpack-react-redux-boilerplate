import React, { Component } from 'react';
import style from './Note.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const css = classNames.bind(style);

import {
  increment
} from '../../actions/action-creators';

class Note extends Component {
  constructor (props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler (e) {
    const { increment } = this.props;

    increment();
  }

  render () {
    const { count } = this.props;

    return (
      <div>
        <h1 className={ css('count') } onClick={ this.onClickHandler }>
          Ready for start to apply react, redux using webpack { count }
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.myApp);
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  increment
}, dispatch);

export { Note };
export default connect(mapStateToProps, mapDispatchToProps)(Note);
