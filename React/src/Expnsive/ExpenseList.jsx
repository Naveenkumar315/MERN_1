import React, { useState, useEffect } from "react";

function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "des1", Amount: 100, category: "one" },
    { id: 2, description: "des2", Amount: 200, category: "two" },
    { id: 3, description: "des3", Amount: 300, category: "three" },
    { id: 4, description: "des4", Amount: 400, category: "four" },
  ]);
  const TableRow = (e, i) => {
    if (visibleExpensive.length == 0) return <tr></tr>;
    return (
      <tr key={e.id}>
        <td>{e.description}</td>
        <td>{e.Amount}</td>
        <td>{e.category}</td>
        <td>
          <button onClick={() => onDelete(i)}>Delete</button>
          <button>Add</button>
        </td>
      </tr>
    );
  };
  const onDelete = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((exp, i) => i !== index));
  };
  const [selectedcat, setSelectedcat] = useState("");
  useEffect(() => {}, [selectedcat]);
  const visibleExpensive = selectedcat
    ? expenses.filter((e) => e.category === selectedcat)
    : expenses;
  return (
    <>
      <select onChange={(e) => setSelectedcat(e.target.value)}>
        <option value="">All category</option>
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
        <option value="four">four</option>
      </select>
      <div>
        {visibleExpensive.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{visibleExpensive.map((e, i) => TableRow(e, i))}</tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>
                  {visibleExpensive
                    .reduce((acc, expense) => expense.Amount + acc, 0)
                    .toFixed(2)}
                </td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <h6>No expenses to display.</h6> // Display a message when expenses array is empty
        )}
      </div>
    </>
  );
}

export default ExpenseList;
