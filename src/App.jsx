import { useMemo, useState } from "react";

import "./app.css";

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "￥ 10,000" },
        { id: 2, amount: "￥ 20,000" },
        { id: 3, amount: "￥ 30,000" },
        { id: 4, amount: "￥ 50,000" },
        { id: 5, amount: "￥ 100,000" },
        { id: 6, amount: "￥ 150,000" },
        { id: 7, amount: "￥ 250,000" },
        { id: 8, amount: "￥ 500,000" },
        { id: 9, amount: "￥ 750,000" },
        { id: 10, amount: "￥ 1,000,000" },
        { id: 11, amount: "￥ 1,500,000" },
        { id: 12, amount: "￥ 2,500,000" },
        { id: 13, amount: "￥ 5,000.000" },
        { id: 14, amount: "￥ 7,500,000" },
        { id: 15, amount: "￥ 10,000,000" },
      ].reverse(),
    []
  );

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">question and answer</div>
      </div>
      <div className="pyramid">
        <div className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
