import React from 'react';

const Note = ({ count, onClick }) => {
  return (
    <h1 onClick={(e) =>{
      onClick();
    }}>
      Ready for start to apply react, redux using webpack { count }
    </h1>
  );
}

export default Note;
