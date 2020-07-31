import React, { useState, useEffect } from "react";

export const Render1 = () => {
  const [list, setList] = useState([1, 2, 3]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    console.log("Rendered");
  });

  return (
    <div>
      <button onClick={e => setRerender(true)}>Re Render</button>
      {list.map((v, i) => {
        return (
          <div
            onClick={e => {
              list.push(list.length);
              setList(list);
            }}
            key={i}
            style={{
              display: "block",
              backgroundColor: "teal",
              padding: "20px",
              margin: "10px",
              color: "white"
            }}
          >
            {v}
          </div>
        );
      })}
    </div>
  );
};

// 1. On clicking the div 1, 2, 3. I am pushing the stuff into the list
//    but react component is never going to knoe this because after pushing the list
//    the previous list and the new list is same
// 2. On click button this re render again, Now whole list render

export class Render extends React.Component {
  state = {
    list: [1, 2, 3]
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.list !== this.state.list) {
      return true;
    }
    return false;
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((v, i) => {
          return (
            <div
              onClick={e => {
                // list.push(list.length);
                this.setState({
                  list: [...list, list.length]
                });
              }}
              style={{
                display: "block",
                padding: 20,
                backgroundColor: "teal",
                margin: 20,
                color: "white"
              }}
              key={i}
            >
              {v}
            </div>
          );
        })}
      </div>
    );
  }
}

// On clicking these div, the new div will appear on click
// The reason is -
// - In class based component by default react component is not goint to check
// old state and old props is same to next state and next prop
// - It is never going to check this state
// Can can behave like previos function component by shoulComponentUpdate()
// by list: [...list, list.length]
// this is immutable again
