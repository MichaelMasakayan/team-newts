import React from "react";
import "./App.css";

function App() {
  return (
    <div className="DivvyUp-item-list">
      <table>
        <thead>
          {/* headings */}
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* items */}
          <tr>
            <td> Burger</td>
            <td> $10</td>
          </tr>
          </tbody>
      </table>
      <h1>Divvy Up</h1>
    </div>
  );
}

export default App;
