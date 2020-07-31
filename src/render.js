import React, { useState, useEffect } from "react";

export const Render = () => {
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
