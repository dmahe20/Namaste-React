import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Tic-Tac-Toe</h1>
      <div style={{ fontSize: '1.5em', marginBottom: '20px' }}>{status}</div>
      <table style={{ borderCollapse: 'collapse', margin: '0 auto' }}>
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <td
                    key={index}
                    style={{
                      width: '100px',
                      height: '100px',
                      border: '1px solid black',
                      fontSize: '2em',
                      cursor: 'pointer',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                    onClick={() => handleClick(index)}
                  >
                    {board[index]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicTacToe;
