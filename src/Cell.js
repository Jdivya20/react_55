import React from 'react';

const Cell = ({ value, columnIndex, play }) => {
    let color = 'white';
    if (value === 1) {
      color = 'pink';
    } else if (value === 2) {
      color = 'blue';
    }
      
    return (
      <td>
        <div className="cell" onClick={() => {play(columnIndex)}}>
          <div className={color}></div>
        </div>
      </td>
    );
  };

export default Cell;