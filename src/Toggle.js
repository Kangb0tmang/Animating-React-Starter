import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: "Z",
      key: 1
    },
    {
      letter: "I",
      key: 2
    },
    {
      letter: "O",
      key: 3
    },
    {
      letter: "N",
      key: 4
    }
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacty: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}
      <button
        onClick={() =>
          setItems([
            {
              letter: "S",
              key: 1
            }
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

export default Toggle;

// const [isToggled, setToggle] = useState(false);
// const transition = useTransition(isToggled, null, {
//   from: { opacity: 0, position: "absolute" },
//   enter: { opacity: 1 },
//   leave: { opacty: 0 }
// });

/* <div style={{ position: "relative" }}>
  {transition.map(({ item, key, props }) =>
    item ? (
      <animated.h1 style={props}>Hello</animated.h1>
    ) : (
      <animated.h1 style={props}>World</animated.h1>
    )
  )}
  <button onClick={() => setToggle(!isToggled)}>Toggle</button>
</div> */
