import React from 'react';

const Note = ({ state, onClick }) => {
  return (
    <h1 onClick={(e) =>{
      onClick();
    }}>
      Ready for start to apply react, redux using webpack { state.count }
    </h1>
  );
}

export default Note;
