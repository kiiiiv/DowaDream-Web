import React from "react";

function Table() {
  const cols = [0, 1, 2, 3, 4, 5];

  return (
    <table>
      <tbody>
        <tr>
          {cols.map((col) => (
            <td
              key={col}
              style={{
                backgroundColor: [1, 3, 5].includes(col) ? "#FFFAC09" : null,
              }}
            ></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;